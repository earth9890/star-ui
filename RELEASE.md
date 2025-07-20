# Release Process

This document describes the release process for the Star UI component library.

## Automated Release Process

The Star UI library uses GitHub Actions for automated releases. Here's how it works:

### 1. Pull Request Workflow

When you create a pull request:
- **PR Checks** workflow runs automatically
- Linting, type checking, and tests are executed
- Bundle size is reported
- Preview deployment is created (when configured)

### 2. Version Bumping

When a PR is merged to main/master:
- **Version Bump** workflow analyzes the PR
- Determines version bump type based on:
  - PR title keywords (feat → minor, fix → patch, BREAKING CHANGE → major)
  - PR labels (feature → minor, bug → patch, breaking → major)
- Creates a new PR with the version bump

### 3. Publishing

When the version bump PR is merged:
- **Release** workflow triggers
- Builds and tests the package
- Creates a GitHub release with tag
- Publishes to npm registry

## Manual Release Process

If you need to release manually:

1. **Update version in package.json**
   ```bash
   npm version patch  # or minor/major
   ```

2. **Update CHANGELOG.md**
   - Add new version section
   - Document all changes

3. **Commit and push**
   ```bash
   git add .
   git commit -m "chore: release v0.0.3"
   git push origin main
   ```

4. **Create and push tag**
   ```bash
   git tag v0.0.3
   git push origin v0.0.3
   ```

The GitHub Action will automatically publish to npm when it detects the new tag.

## Version Bump Guidelines

### Patch Release (0.0.x)
- Bug fixes
- Minor dependency updates
- Documentation improvements

### Minor Release (0.x.0)
- New features
- New components
- Non-breaking API changes

### Major Release (x.0.0)
- Breaking changes
- Major redesigns
- API changes that require migration

## Setting Up NPM Token

To enable automated publishing, you need to set up an NPM token:

1. Go to npmjs.com → Account Settings → Access Tokens
2. Generate a new "Automation" token
3. Copy the token
4. Go to GitHub repository → Settings → Secrets → Actions
5. Create a new secret named `NPM_TOKEN`
6. Paste the token value

## Troubleshooting

### Release workflow not triggering
- Ensure the PR was merged (not closed)
- Check that GitHub Actions are enabled
- Verify branch protection rules allow Actions to push

### NPM publish failing
- Verify NPM_TOKEN secret is set correctly
- Check npm account has publish permissions
- Ensure package name is available

### Version conflicts
- If a version already exists, bump to next version
- Check git tags match package.json versions
- Clean up any duplicate tags