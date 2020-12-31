---
title: "Publishing to GitHub Packages with Gradle and GitHub Actions"
date: "2019-12-04"
draft: false
path: "/blog/publishing-github-packages-gradle-github-actions"
featuredImage: ../images/github-actions.jpeg
---

In November 2019 GitHub released [GitHub Packages](https://github.com/features/packages) and [GitHub Actions](https://github.com/features/actions) to the general public. Packages allows library owners to publish their code directly to GitHub. The aim is to be another package hosting repository like [npmjs.com](https://www.npmjs.com/) or [Maven Central](https://mvnrepository.com/repos/central), but now the packages and code can live side-by-side. GitHub Packages supports multiple package types, including Docker, RubyGems, NPM, Maven, and NuGet to name a few.

GitHub Actions allows repository owners to automate their workflow with different steps that can be triggered on any repository event. This can include common things like pull request checks and publishing releases, but can it can also run on other events like [messaging first time contributors](https://github.com/actions/first-interaction).

Together both of these features are free for open source projects and they work well together to have all of the tasks around library management in a single location. As I was creating a new open source library in [Kotlin](https://kotlinlang.org/) and [Gradle](https://gradle.org/), I thought I would try to use both Actions and Packages and document my experience along the way.

If you just want a quick example, you can view all the code and GitHub files in my library, [kotlin-extensions](https://github.com/smyrick/kotlin-extensions).

## Getting Setup

The first step is to make sure our library can build locally and the output is a valid jar file. While we can use Gradle in GitHub Actions with some community created steps, I like to use the [Gradle Wrapper](https://docs.gradle.org/current/userguide/gradle_wrapper.html). This ensures that all contributors to a project are using the same version of Gradle and we can just use the wrapper in the actions. This will also help us avoid the common _"it works on my machine"_ problem.

```bash
$ ./gradlew build
```

## Setting up Gradle publish

Now that we have a successful build, we want to configure Gradle so when we run the publish command it connects to GitHub Packages. I am using the [Gradle Kotlin DSL](https://docs.gradle.org/current/userguide/kotlin_dsl.html) but for more details see the [official GitHub Packages documentation](https://docs.github.com/en/free-pro-team/packages/guides/configuring-gradle-for-use-with-github-packages) on setting up Gradle.

First we need to include the `maven-publish` plugin as a dependency in `build.gradle.kts`.

```kotlin
// build.gradle.kts
plugins {
    `maven-publish`
    // Other library plugins...
}
```

Next we need to configure the publishing task by replacing `my-username` and `my-library` with the proper values. `GITHUB_ACTOR` and `GITHUB_TOKEN` are going to come from GitHub Actions so don't worry about those for now.

```kotlin
// build.gradle.kts continued...
publishing {
    publications {
        create<MavenPublication>("default") {
            from(components["java"])
            // Include any other artifacts here, like javadocs
        }
    }

    repositories {
        maven {
            name = "GitHubPackages"
            url = uri("https://maven.pkg.github.com/{my-username}/{my-library}")
            credentials {
                username = System.getenv("GITHUB_ACTOR")
                password = System.getenv("GITHUB_TOKEN")
            }
        }
    }
}
```

The last step we need to include is to set the library `group` and `version` in `gradle.properties`. This will allow us to change the version dynamically when we publish without having to update our main build file every release.

```properties
# gradle.properties
group=dev.smyrick
version=0.0.1-SNAPSHOT
```

## Creating GitHub Actions
Now that we have Gradle configured the next step is to execute the publish task in GitHub Actions. Create a new workflow file in `.github/workflows`. A current version of the workflow can be found in the [kotlin-extensions repo](https://github.com/smyrick/kotlin-extensions/blob/master/.github/workflows/publish-release.yml).

This workflow is publishing a new package when there is a new release in GitHub. This means that there will be tag created with the release version when this workflow is triggered.

```yml
# publish-release.yml
name: Publish release

on:
  release:
    types: [published]
```

Next we need to setup the steps to run on this trigger. We will checkout the code at the tagged version; set up our JVM with a specified version; and finally run the following command, passing in the new version.

```bash
./gradlew -Pversion=${version} publish
```

The version name comes from the git tag value. Since git tags are published with the full name format of `refs/tags/xxxx` we can run a simple cut to extract the tag name and use that as our version. The `GITHUB_ACTOR` is set for all GitHub Actions as an environment variable. The `GITHUB_TOKEN` is set for all actions but it is in the secrets, so we must copy it to an environment variable that we are using in our Gradle configuration. GitHub is smart enough though to not expose this value in the logs even if environment value is logged. See the the Actions documentation for a list of [all environment variables](https://docs.github.com/en/free-pro-team/actions/reference/environment-variables).

```yml
# publish-release.yml continued...
jobs:
  publish-release:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout latest code
        uses: actions/checkout@v1

      - name: Set up JDK 11
        uses: actions/setup-java@v1
        with:
          java-version: 11

      - name: Publish artifact
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

        # The GITHUB_REF tag comes in the format 'refs/tags/xxx'.
        # If we split on '/' and take the 3rd value,
        # we can get the release name.
        run: |
          NEW_VERSION=$(echo "${GITHUB_REF}" | cut -d "/" -f3)
          echo "New version: ${NEW_VERSION}"
          echo "Github username: ${GITHUB_ACTOR}"
          ./gradlew -Pversion=${NEW_VERSION} publish
```

## Monitoring Packages

After we have Gradle setup and the GitHub Actions checked in, we can release a new version of our library. The release notes from the tag will be copied over as the package description which can be helpful to mention any changes that occured for the new version.

As an example, [this tag release](https://github.com/smyrick/kotlin-extensions/releases/tag/0.0.19) resulted in [this package](https://github.com/smyrick/kotlin-extensions/packages/55467?version=0.0.19) being published. From the packages view we can also track the number of downloads and other packages using the specific version. This can be helpful for the new features coming to GitHub [around security](https://help.github.com/en/github/managing-security-vulnerabilities/managing-security-vulnerabilities-in-your-project), which will allow us to alert all dependents of any vulnerabilities in a specific version and ask them to update.

______

That wraps up this short post. I hope you will find the information helpful so you don’t have to spend an afternoon reading through the GitHub documentation as I did (which is still very good).

Feel free to share your own experience with GitHub Actions and Packages with me on Twitter and follow me for future articles! 😃

______

_This was [orginally posted to Medium](https://medium.com/@shanemyrick/publishing-to-github-packages-with-gradle-and-github-actions-4ad842634c4e) and moved to my personal blog at a later date._
