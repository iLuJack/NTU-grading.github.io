# Test
# Commit Message Guidelines

## Format Structure

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

## Type

Must be one of the following:

* **feat**: A new feature
* **fix**: A bug fix
* **docs**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **perf**: A code change that improves performance
* **test**: Adding missing or correcting existing tests
* **chore**: Changes to the build process or auxiliary tools
* **revert**: Reverts a previous commit

## Scope

* **frontend**: Changes to the frontend
* **backend**: Changes to the backend
* **docs**: Changes to the documentation
* **other**: Other changes

## Subject

The subject should be a short description of the changes made in the commit:
* Use imperative, present tense (e.g., "change", not "changed" or "changes")
* Don't capitalize the first letter
* No period (.) at the end
* Maximum 50 characters

## Body

The body should provide detailed context about the changes:
* Use imperative, present tense
* Include motivation for the change
* Contrast with previous behavior
* Wrap text at 72 characters

## Footer

The footer should reference any issues or include breaking change notes:
* Reference issues: "Fixes #123", "Closes #456"
* Breaking changes: Start with "BREAKING CHANGE:"

## Examples

### Feature Addition
```
feat(frontend): add grade chart visualization

Add interactive D3.js chart to display grade distribution
with hover tooltips and responsive design.

Closes #123
```

### Bug Fix
```
fix(backend): handle null API responses

Add proper error handling for null responses from grade API
to prevent application crashes.

Fixes #456
```

### Documentation Update
```
docs(readme): update setup guide

- Add development environment setup steps
- Include deployment instructions
- Add troubleshooting section
```

