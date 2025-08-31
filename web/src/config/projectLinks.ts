// Maps resume project titles to GitHub URLs. Keys are normalized slugs.
// Normalization: lowercase, remove non-alphanumerics.

export function normalizeProjectTitle(title: string): string {
  return (title || "").toLowerCase().replace(/[^a-z0-9]/g, "");
}

export const projectLinks: Record<string, string> = {
  // Resume: IMC Prosperity 3 → User repo
  [normalizeProjectTitle("IMC Prosperity 3")]: "https://github.com/TheNoZER0/imc-prosperity3",
  // Resume: ValoStats → Team repo
  [normalizeProjectTitle("ValoStats")]: "https://github.com/XLeling727/Valostats",
  // Resume: AlgoJam → Choose 2024 repo (resume date Sep 2024)
  [normalizeProjectTitle("AlgoJam")]: "https://github.com/TheNoZER0/AlgoJam2024",
  // Resume: SkinDetect → If you have a repo, update this URL
  [normalizeProjectTitle("SkinDetect")]: "https://github.com/TheNoZER0/SkinDetect",
};


