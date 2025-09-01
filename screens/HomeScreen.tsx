import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <ThemedView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ThemedText type="title">Welcome to Steadiifit</ThemedText>
      <ThemedText type="body">Your fitness journey starts here 🚀</ThemedText>
    </ThemedView>
  );
}
