module.exports = {
  expo: {
    name: "ExpoSupabaseStarter",
    slug: "ExpoSupabaseStarter",
    scheme: "expo-supabase-starter",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "automatic",
    assetBundlePatterns: ["**/*"],
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
      config: {
        usesNonExemptEncryption: false
      }
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png"
      }
    },
    experiments: {
      typedRoutes: true
    },
    plugins: ["expo-router", "expo-secure-store"],
    extra: {
      supabaseUrl: process.env.EXPO_PUBLIC_API_URL,
      supabaseKey: process.env.EXPO_PUBLIC_API_KEY,
    }
  }
}; 