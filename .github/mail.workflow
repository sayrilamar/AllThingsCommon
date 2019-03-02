workflow "Test Workflow" {
  resolves = ["actions/bin/sh@master"]
  on = "pull_request"
}

action "actions/bin/sh@master" {
  uses = "actions/bin/sh@master"
  args = "echo Hello $GITHUB_ACTOR"
}
