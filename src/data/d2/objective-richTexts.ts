const richTextManifestSourceData = {
  '[Aim Down Sights]': ['SandboxPerk', 1328791980],
  '[Air Move]': ['SandboxPerk', 3694014520],
  '[Alternate Weapon Action]': ['SandboxPerk', 250262009],
  '[Arc]': ['Objective', 28854951],
  '[Auto Rifle]': ['Objective', 49808967],
  '[Block]': ['SandboxPerk', 2236497009],
  '[Boost]': ['SandboxPerk', 3104860955],
  '[Bow]': ['Objective', 791594362],
  '[Brake]': ['SandboxPerk', 4189070124],
  '[Disruption]': ['SandboxPerk', 669536781],
  '[Fusion Rifle]': ['Objective', 579143207],
  '[Glaive]': ['Objective', 714581758],
  '[Grenade Launcher]': ['Objective', 43313268],
  '[Grenade]': ['Objective', 45245118],
  '[Hand Cannon]': ['Objective', 612360742],
  '[Headshot]': ['Objective', 116015535],
  '[Heavy Attack]': ['SandboxPerk', 971817906],
  '[Insert Medal Here]': ['Objective', 2254471463],
  '[Light Attack]': ['SandboxPerk', 355406666],
  '[Linear Fusion Rifle]': ['Objective', 726078890],
  '[Machine Gun]': ['Objective', 606807407],
  '[Melee]': ['Objective', 44811435],
  '[Pulse Rifle]': ['Objective', 189060104],
  '[Quest]': ['Objective', 119206183],
  '[Rocket Launcher]': ['Objective', 13215836],
  '[SMG]': ['Objective', 102976778],
  '[Scout Rifle]': ['Objective', 8272054],
  '[Shield-Piercing]': ['SandboxPerk', 591985846],
  '[Shoot]': ['SandboxPerk', 2805448568],
  '[Shotgun]': ['Objective', 212380697],
  '[Sidearm]': ['Objective', 141911950],
  '[Sniper Rifle]': ['Objective', 273389628],
  '[Solar]': ['Objective', 85535853],
  '[Special Grenade Launcher]': ['Objective', 1217177904],
  '[Sprint]': ['SandboxPerk', 1330059513],
  '[Stagger]': ['SandboxPerk', 72139184],
  '[Stasis: Glyph 0]': ['Objective', 1397002441],
  '[Stasis: Glyph 1 Locked]': ['Objective', 1851419582],
  '[Stasis: Glyph 2 Locked]': ['Objective', 1857129539],
  '[Stasis: Glyph 3 Locked]': ['Objective', 1481711502],
  '[Stasis]': ['Objective', 85761957],
  '[Super]': ['SandboxPerk', 1330059512],
  '[Sword]': ['Objective', 1260068656],
  '[Trace Rifle]': ['Objective', 364984909],
  '[Void]': ['Objective', 33657378],
  '': ['Objective', 4231452845],
} as const;

export type StringsNeedingReplacement = keyof typeof richTextManifestSourceData;

const richTextManifestExamples: Record<
  StringsNeedingReplacement,
  readonly [tableName: 'Objective' | 'SandboxPerk', hash: number]
> = richTextManifestSourceData;

export default richTextManifestExamples;
