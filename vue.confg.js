module.exports = {
  productionSourceMap: false,
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: "com.pcgames-repack.app",
        productName: "pcgames-repack",
        win: {
          icon: "src/assets/logo.png",
          target: [
            {
              target: "nsis",
              arch: ["x64", "ia32"]
            }
          ]
        },
        nsis:{
          oneClick: false,
          perMachine: true,
          allowToChangeInstallationDirectory: true
        },
        publish: [
          {
            provider: "github",
            owner: "ChrisMichaelPerezSantiago",
            repo: "pcgames-repack",
            releaseType: "draft",
          }
        ]
      }
    }
  }
}