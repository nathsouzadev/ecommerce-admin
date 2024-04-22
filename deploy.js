const deploy = async () => {
  const res = await fetch(
    'https://api.vercel.com/v13/deployments/ecommerce-admin-git-auth-nathsouza.vercel.app?withGitRepoInfo=true',
    {
      headers: {
        Authorization: 'Bearer ibOL90CmZYf5LMbloXDXkXSK',
      },
      method: 'get',
    },
  );

  const data = await res.json(); //data.id
  console.log(data);
//   console.log('STARTING DATA')
//   data.forEach(element => {
//     console.log(element)
//   });
};

deploy();

// v13/deployments/ecommerce-admin-git-auth-nathsouza.vercel.app?withGitRepoInfo=true

// new Date().toISOString()

// v2/deployments/dpl_9SdVTQYmAJg1pnLfJXvwiHmQ2yg2/events?builds=1&delimiter=1&direction=backward

const data = {
    alias: [ 'ecommerce-admin-git-auth-nathsouza.vercel.app' ],
    aliasAssigned: true,
    aliasError: null,
    automaticAliases: [ 'ecommerce-admin-git-auth-nathsouza.vercel.app' ],
    bootedAt: 1713639858128,
    buildingAt: 1713639859320,
    buildSkipped: false,
    createdAt: 1713639858128,
    creator: {
      uid: 'VNcBYaWWhHlAQmBFCNm41fnp',
      username: 'nathsouzadev',
      avatar: '5a2da62e41082a46ee5db249b024916580dbfd7f'
    },
    gitSource: {
      ref: 'auth',
      repoId: 788915151,
      sha: '797dbc6a312082e316108ee64725c4dd4d9c7527',
      type: 'github',
      prId: null
    },
    id: 'dpl_97keYiZ8QvLPgdKuS9YG6QBGRgTD',
    initReadyAt: 1713639932492,
    lambdas: [
      {
        id: 'bld_46ekl69c1',
        createdAt: 1713639858144,
        entrypoint: '.',
        readyState: 'READY',
        readyStateAt: 1713639858144,
        output: [Array]
      }
    ],
    name: 'ecommerce-admin',
    meta: {
      githubCommitAuthorName: 'Nathally Souza',
      githubCommitMessage: '[CHORE]update actions',
      githubCommitOrg: 'nathsouzadev',
      githubCommitRef: 'auth',
      githubCommitRepo: 'ecommerce-admin',
      githubCommitSha: '797dbc6a312082e316108ee64725c4dd4d9c7527',
      githubDeployment: '1',
      githubOrg: 'nathsouzadev',
      githubRepo: 'ecommerce-admin',
      githubRepoOwnerType: 'User',
      githubCommitRepoId: '788915151',
      githubRepoId: '788915151',
      githubRepoVisibility: 'public',
      githubCommitAuthorLogin: 'nathsouzadev',
      githubPrId: '1',
      branchAlias: 'ecommerce-admin-git-auth-nathsouza.vercel.app',
      action: 'redeploy',
      originalDeploymentId: 'dpl_4KwXV6mwCFiujWGQfs7UHac1UW4o'
    },
    public: false,
    ready: 1713639932492,
    readyState: 'READY',
    readySubstate: 'STAGED',
    regions: [ 'iad1' ],
    status: 'READY',
    target: null,
    team: {
      id: 'team_p2UV4fOttL1Dv0jtr1nk1Grg',
      name: 'nathsouza',
      slug: 'nathsouza'
    },
    type: 'LAMBDAS',
    url: 'ecommerce-admin-cx8jxsg61-nathsouza.vercel.app',
    version: 2,
    previewCommentsEnabled: true,
    aliasAssignedAt: 1713639932840,
    build: {
      env: [
        'CI',
        'VERCEL',
        'VERCEL_ENV',
        'TURBO_REMOTE_ONLY',
        'TURBO_RUN_SUMMARY',
        'NX_DAEMON',
        'VERCEL_URL',
        'VERCEL_GIT_PROVIDER',
        'VERCEL_GIT_PREVIOUS_SHA',
        'VERCEL_GIT_REPO_SLUG',
        'VERCEL_GIT_REPO_OWNER',
        'VERCEL_GIT_REPO_ID',
        'VERCEL_GIT_COMMIT_REF',
        'VERCEL_GIT_COMMIT_SHA',
        'VERCEL_GIT_COMMIT_MESSAGE',
        'VERCEL_GIT_COMMIT_AUTHOR_LOGIN',
        'VERCEL_GIT_COMMIT_AUTHOR_NAME',
        'VERCEL_GIT_PULL_REQUEST_ID',
        'NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL',
        'NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL',
        'NEXT_PUBLIC_CLERK_SIGN_UP_URL',
        'NEXT_PUBLIC_CLERK_SIGN_IN_URL',
        'CLERK_SECRET_KEY',
        'NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY',
        'VERCEL_DEPLOYMENT_ID',
        'VERCEL_BRANCH_URL',
        'VERCEL_DISCOVER_FOLDER_SIZES',
        'VERCEL_NEXT_BUNDLED_SERVER',
        'VERCEL_EDGE_OTEL_COLLECTOR',
        'VERCEL_SERVERLESS_FUNCTION_FAILOVER',
        'VERCEL_ALLOW_RUBY32',
        'VERCEL_LAYER_LAUNCHER',
        'VERCEL_IGNORE_BUILD_STEP_PACKAGE_MANAGER_DETECT',
        'VERCEL_ENABLE_NPM_DEFAULT',
        'ENABLE_VC_BUILD',
        'VERCEL_BUILD_OUTPUTS_EDGE_FUNCTION',
        'VERCEL_EDGE_FUNCTIONS_REGIONAL_INVOCATION',
        'VERCEL_EDGE_FUNCTIONS_EMBEDDED_SOURCEMAPS',
        'VERCEL_EDGE_FUNCTIONS_STRICT_MODE',
        'USE_OUTPUT_FOR_EDGE_FUNCTIONS',
        'NEXT_PRIVATE_MULTI_PAYLOAD',
        'VERCEL_RICHER_DEPLOYMENT_OUTPUTS',
        'VERCEL_EDGE_SUSPENSE_CACHE',
        'VERCEL_SERVERLESS_SUSPENSE_CACHE',
        'VERCEL_BUILD_MONOREPO_SUPPORT',
        'VERCEL_USE_NODE_BRIDGE_PRIVATE_LATEST',
        'VERCEL_ENABLE_NODE_COMPATIBILITY',
        'VERCEL_ENABLE_EXTENDED_FALLBACK_PAYLOAD',
        'VERCEL_WAKE_UP_DEPLOYMENT',
        'TURBO_FORCE',
        'NX_SKIP_NX_CACHE'
      ]
    },
    builds: [],
    createdIn: 'sfo1',
    crons: [],
    env: [
      'VERCEL',
      'VERCEL_ENV',
      'TURBO_REMOTE_ONLY',
      'TURBO_RUN_SUMMARY',
      'NX_DAEMON',
      'VERCEL_URL',
      'VERCEL_GIT_PROVIDER',
      'VERCEL_GIT_PREVIOUS_SHA',
      'VERCEL_GIT_REPO_SLUG',
      'VERCEL_GIT_REPO_OWNER',
      'VERCEL_GIT_REPO_ID',
      'VERCEL_GIT_COMMIT_REF',
      'VERCEL_GIT_COMMIT_SHA',
      'VERCEL_GIT_COMMIT_MESSAGE',
      'VERCEL_GIT_COMMIT_AUTHOR_LOGIN',
      'VERCEL_GIT_COMMIT_AUTHOR_NAME',
      'VERCEL_GIT_PULL_REQUEST_ID',
      'NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL',
      'NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL',
      'NEXT_PUBLIC_CLERK_SIGN_UP_URL',
      'NEXT_PUBLIC_CLERK_SIGN_IN_URL',
      'CLERK_SECRET_KEY',
      'NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY',
      'VERCEL_DEPLOYMENT_ID',
      'VERCEL_BRANCH_URL'
    ],
    functions: null,
    inspectorUrl: 'https://vercel.com/nathsouza/ecommerce-admin/97keYiZ8QvLPgdKuS9YG6QBGRgTD',
    isInConcurrentBuildsQueue: false,
    ownerId: 'team_p2UV4fOttL1Dv0jtr1nk1Grg',
    plan: 'hobby',
    projectId: 'prj_JY2gAA6nO61IM8kStMOR57liVP6O',
    projectSettings: {
      buildCommand: null,
      devCommand: null,
      framework: 'nextjs',
      commandForIgnoringBuildStep: null,
      installCommand: null,
      outputDirectory: null,
      speedInsights: { id: 'U4pinCHTDcXATlm58ObUhRgQJJS', hasData: false },
      webAnalytics: { id: '8RpHTDmj4oJRFh6dVwyxgTqaQ' }
    },
    routes: [
      {
        src: '^(?:/((?:[^/]+?)(?:/(?:[^/]+?))*))/$',
        headers: [Object],
        status: 308,
        continue: true
      },
      {
        src: '^/_next/__private/trace$',
        dest: '/404',
        status: 404,
        continue: true
      },
      { src: '^/404/?$', status: 404, continue: true, missing: [Array] },
      { src: '^/500$', status: 500, continue: true },
      {
        src: '^/_next/data/gtmHIO1qpW4B8IaBonOKn/(.*).json$',
        dest: '/$1',
        override: true,
        continue: true,
        has: [Array]
      },
      {
        src: '^/index(?:/)?$',
        has: [Array],
        dest: '/',
        override: true,
        continue: true
      },
      {
        continue: true,
        src: '^(?:/(_next/data/[^/]{1,}))?(?:/((?!.+.[w]+$|_next).*))(.json)?[/#\\?]?$',
        missing: [Array],
        middlewareRawSrc: [Array],
        override: true,
        middleware: 0
      },
      {
        continue: true,
        src: '^(?:/(_next/data/[^/]{1,}))?(?:/(/?index|/?index\\.json))?[/#\\?]?$',
        missing: [Array],
        middlewareRawSrc: [Array],
        override: true,
        middleware: 0
      },
      {
        continue: true,
        src: '^(?:/(_next/data/[^/]{1,}))?(?:/(api|trpc))(.*)(.json)?[/#\\?]?$',
        missing: [Array],
        middlewareRawSrc: [Array],
        override: true,
        middleware: 0
      },
      {
        src: '^/$',
        has: [Array],
        dest: '/_next/data/gtmHIO1qpW4B8IaBonOKn/index.json',
        continue: true,
        override: true
      },
      {
        src: '^/((?!_next/)(?:.*[^/]|.*))/?$',
        has: [Array],
        dest: '/_next/data/gtmHIO1qpW4B8IaBonOKn/$1.json',
        continue: true,
        override: true
      },
      {
        src: '^/$',
        has: [Array],
        dest: '/__index.prefetch.rsc',
        headers: [Object],
        continue: true,
        override: true
      },
      {
        src: '^/((?!.+\\.rsc).+?)(?:/)?$',
        has: [Array],
        dest: '/$1.prefetch.rsc',
        headers: [Object],
        continue: true,
        override: true
      },
      {
        src: '^/$',
        has: [Array],
        dest: '/index.rsc',
        headers: [Object],
        continue: true,
        override: true
      },
      {
        src: '^/((?!.+\\.rsc).+?)(?:/)?$',
        has: [Array],
        dest: '/$1.rsc',
        headers: [Object],
        continue: true,
        override: true
      },
      { handle: 'filesystem' },
      {
        src: '^/_next/data/gtmHIO1qpW4B8IaBonOKn/(.*).json$',
        dest: '/$1',
        continue: true,
        has: [Array]
      },
      { src: '^/index(?:/)?$', has: [Array], dest: '/', continue: true },
      {
        src: '^/\\.prefetch\\.rsc$',
        dest: '/__index.prefetch.rsc',
        check: true
      },
      { src: '^/\\.rsc$', dest: '/index.rsc', check: true },
      {
        src: '^/__index.prefetch.rsc$',
        dest: '/index.rsc',
        has: [Array],
        continue: true,
        override: true
      },
      {
        src: '^/(.+?).prefetch.rsc(?:/)?$',
        dest: '/$1.rsc',
        has: [Array],
        continue: true,
        override: true
      },
      { handle: 'resource' },
      { src: '^/.*$', status: 404 },
      { handle: 'miss' },
      {
        src: '^/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media)/.+$',
        status: 404,
        check: true,
        dest: '$0'
      },
      { handle: 'rewrite' },
      {
        src: '^/$',
        has: [Array],
        dest: '/_next/data/gtmHIO1qpW4B8IaBonOKn/index.json',
        continue: true
      },
      {
        src: '^/((?!_next/)(?:.*[^/]|.*))/?$',
        has: [Array],
        dest: '/_next/data/gtmHIO1qpW4B8IaBonOKn/$1.json',
        continue: true
      },
      {
        src: '^/_next/data/gtmHIO1qpW4B8IaBonOKn/sign\\-in(?:/(?<nxtPsignin>.+?))?(?:/)?.json$',
        dest: '/sign-in/[[...sign-in]]?nxtPsign-in=$nxtPsignin'
      },
      {
        src: '^/_next/data/gtmHIO1qpW4B8IaBonOKn/sign\\-up(?:/(?<nxtPsignup>.+?))?(?:/)?.json$',
        dest: '/sign-up/[[...sign-up]]?nxtPsign-up=$nxtPsignup'
      },
      {
        src: '^/sign\\-in(?:/(?<nxtPsignin>.+?))?(?:\\.rsc)(?:/)?$',
        dest: '/sign-in/[[...sign-in]].rsc?nxtPsign-in=$nxtPsignin'
      },
      {
        src: '^/sign\\-in(?:/(?<nxtPsignin>.+?))?(?:/)?$',
        dest: '/sign-in/[[...sign-in]]?nxtPsign-in=$nxtPsignin'
      },
      {
        src: '^/sign\\-up(?:/(?<nxtPsignup>.+?))?(?:\\.rsc)(?:/)?$',
        dest: '/sign-up/[[...sign-up]].rsc?nxtPsign-up=$nxtPsignup'
      },
      {
        src: '^/sign\\-up(?:/(?<nxtPsignup>.+?))?(?:/)?$',
        dest: '/sign-up/[[...sign-up]]?nxtPsign-up=$nxtPsignup'
      },
      {
        src: '^/_next/data/gtmHIO1qpW4B8IaBonOKn/(.*).json$',
        headers: [Object],
        continue: true,
        override: true
      },
      {
        src: '^/_next/data/gtmHIO1qpW4B8IaBonOKn/(.*).json$',
        dest: '__next_data_catchall'
      },
      { handle: 'hit' },
      {
        src: '^/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media|gtmHIO1qpW4B8IaBonOKn)/.+$',
        headers: [Object],
        continue: true,
        important: true
      },
      {
        src: '^/index$',
        headers: [Object],
        continue: true,
        important: true
      },
      {
        src: '^/((?!index$).*)$',
        headers: [Object],
        continue: true,
        important: true
      },
      { handle: 'error' },
      { src: '^/.*$', dest: '/_not-found', status: 404 },
      { src: '^/.*$', dest: '/500', status: 500 }
    ],
    gitRepo: {
      path: 'nathsouzadev/ecommerce-admin',
      defaultBranch: 'main',
      name: 'ecommerce-admin',
      org: 'nathsouzadev',
      private: false,
      repo: 'ecommerce-admin',
      repoOwnerId: 72207361,
      repoId: 788915151,
      type: 'github',
      ownerType: 'user'
    }
  }