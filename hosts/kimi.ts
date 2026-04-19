import type { HostConfig } from '../scripts/host-config';

const kimi: HostConfig = {
  name: 'kimi',
  displayName: 'Kimi',
  cliCommand: 'kimi',
  cliAliases: [],

  globalRoot: '.kimi/skills/gstack',
  localSkillRoot: '.kimi/skills/gstack',
  hostSubdir: '.kimi',
  usesEnvVars: true,

  frontmatter: {
    mode: 'allowlist',
    keepFields: ['name', 'description'],
    descriptionLimit: null,
  },

  generation: {
    generateMetadata: false,
    skipSkills: ['codex'],
  },

  pathRewrites: [
    { from: '~/.claude/skills/gstack', to: '~/.kimi/skills/gstack' },
    { from: '.claude/skills/gstack', to: '.kimi/skills/gstack' },
    { from: '.claude/skills', to: '.kimi/skills' },
  ],

  suppressedResolvers: ['GBRAIN_CONTEXT_LOAD', 'GBRAIN_SAVE_RESULTS'],

  runtimeRoot: {
    globalSymlinks: ['bin', 'browse/dist', 'browse/bin', 'gstack-upgrade', 'ETHOS.md'],
    globalFiles: {
      'review': ['checklist.md', 'TODOS-format.md'],
    },
  },

  install: {
    prefixable: false,
    linkingStrategy: 'symlink-generic',
  },

  learningsMode: 'basic',
};

export default kimi;
