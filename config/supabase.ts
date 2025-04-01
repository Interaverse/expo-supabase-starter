import "react-native-url-polyfill/auto";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import { AppState } from "react-native";

if (!process.env.EXPO_PUBLIC_API_URL) {
	console.error('Missing EXPO_PUBLIC_API_URL');
}

if (!process.env.EXPO_PUBLIC_API_KEY) {
	console.error('Missing EXPO_PUBLIC_API_KEY');
}

const supabaseUrl = 'https://setquxwcxzdwglpmjxzr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNldHF1eHdjeHpkd2dscG1qeHpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNDkzODgsImV4cCI6MjA1ODcyNTM4OH0.gAlazJLfwk9Lpt4h_o7_RArIyf_zxL9IUz4K3mxUjtA';

console.log('Supabase URL:', supabaseUrl);
console.log('Supabase Key:', supabaseKey);

export const supabase = createClient(supabaseUrl, supabaseKey, {
	auth: {
		storage: AsyncStorage,
		autoRefreshToken: true,
		persistSession: true,
		detectSessionInUrl: false,
	},
});

AppState.addEventListener("change", (state) => {
	if (state === "active") {
		supabase.auth.startAutoRefresh();
	} else {
		supabase.auth.stopAutoRefresh();
	}
});
