workflow "Test Workflow" {
  resolves = ["npm test", "build npm"]
  on = "push"
}

action "actions/bin/sh@master-1" {
  uses = "actions/bin/sh@master"
  args = "echo HELLLLOOOOO"
}

action "build npm" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "install"
}

action "npm test" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["build npm"]
  args = "test"
}
