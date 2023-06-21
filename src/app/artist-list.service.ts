import { Injectable } from '@angular/core';
import { Artist } from './Artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistListService {

//  Data
private artistList:Artist[]= [
//   {
//     name: "Goma23",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis deserunt nulla odit dolore delectus molestiae, vitae corrupti suscipit sit. Mollitia fuga eius odit facere nam perferendis nihil cumque magnam sed! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea excepturi temporibus nesciunt eos dolores est nisi alias ipsam. Maiores, expedita. Praesentium rerum ipsa laudantium accusantium quam temporibus exercitationem tempore deserunt. Lorem ipsum dolor sit amet consectetur adipisicing  elit. Odit reiciendis ipsa repellat ex consectetur vel atque perferendis, tenetur numquam voluptatem totam itaque. In, saepe odio. Dolore laboriosam ut harum beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut pariatur accusamu    totam placeat eum at, asperiores facilis amet sed officia. Culpa, adipisci? Doloribus quod ex quibusdam error distinctio, architecto sequi! ",
//     genre: "Acidcore / Mental",
//     cateogry: "Liveset / Dj Set",
//     img: "/../assets/IMG_3898.JPG",
//     hasAlbum: true,
//     albums: [
//       {name: "Demon Zone", img: "https://f4.bcbits.com/img/a1429499805_2.jpg",
//       songs: ["Delyrium"," Demon Tribe"," H.L.DTR"," Hardmetal"," Infernal Kick"," Mental Tribe"," Ultima Parada"]
//       },
//       {name: "C4",img: "https://f4.bcbits.com/img/a1800859784_2.jpg",
//       songs: [" Acid Revange"," Angra (Mental)"," Danger Zone"," Gabb.Core"," New Order"," Sound Invasion"," The End"]
//       },
//      {name: "Acid Shaman",img: "https://f4.bcbits.com/img/a2703494392_2.jpg",
//      songs: [" Acid Satisfaced"," Acid Shaman"]
//       },
//     ],
//     releases:[
//       {name: "Valhalla",img: "https://f4.bcbits.com/img/a0470395507_2.jpg"},
//       {name: "Inferno",img: "https://f4.bcbits.com/img/a1999849003_2.jpg"},
//     ]
// },
{
name: "ACID WARLOCK",
noDesc: false,
genre: "Acidcore / Mental",
cateogry: "Liveset",
img: "/../assets/AcidWarlock.jpeg",
ScLink: "https://soundcloud.com/acidwarlock", 
SpLink: "https://open.spotify.com/artist/1LSUt5EHKXmaXl4cDdnOo8", 
IgLink: "https://www.instagram.com/acid.warlock/ ",
Active: false,
hasAlbum: false,
// releases: [
//   {name: "Cities are Necrosystems",img: "https://f4.bcbits.com/img/a2477816954_16.jpg", BcUrl:'https://cursed-dissonances.bandcamp.com/track/cities-are-necrosystems'},
//   {name: "Void Whale",img: "https://f4.bcbits.com/img/a0323126154_2.jpg", BcUrl:'https://acidwarlock.bandcamp.com/track/void-whale'},
//   {name: "Engine Of Chaos",img: "https://f4.bcbits.com/img/a4106634322_2.jpg", BcUrl:'https://acidwarlock.bandcamp.com/track/engine-of-chaos'},
//   {name: "Black Steam",img: "https://f4.bcbits.com/img/a0952029553_2.jpg", BcUrl:'https://acidwarlock.bandcamp.com/track/black-steam'},
//   {name: "Praying to the Wrong God",img: "https://f4.bcbits.com/img/a1128136844_2.jpg", BcUrl:'https://acidwarlock.bandcamp.com/track/praying-to-the-wrong-god'},
//   {name: "Codex Gigas",img: "https://f4.bcbits.com/img/a4133850534_2.jpg", BcUrl:'https://acidwarlock.bandcamp.com/track/o-d-x-g-i-g-a-s'},
//   {name: "Solve Et Coagula",img: "https://f4.bcbits.com/img/a1280359253_2.jpg", BcUrl:'https://acidwarlock.bandcamp.com/track/solve-et-coagula'},
//   {name: "Mors Vincit Omnia (Winds of War)",img: "https://f4.bcbits.com/img/a3883269361_2.jpg", BcUrl:'https://acidwarlock.bandcamp.com/track/mors-vincit-omnia-winds-of-war'},
//   {name: "(☿)",img: "https://f4.bcbits.com/img/a1645930882_2.jpg", BcUrl:'https://acidwarlock.bandcamp.com/track/--2'},
//   {name: "In Alarum Tuarum Umbra Canam",img: "https://f4.bcbits.com/img/a2443800511_2.jpg", BcUrl:'https://acidwarlock.bandcamp.com/album/in-alarum-tuarum-umbra-canam'},
//   {name: "Ad Astra per Aspera",img: "https://f4.bcbits.com/img/a2625334481_2.jpg", BcUrl:'https://acidwarlock.bandcamp.com/album/ad-astra-per-aspera'},
//   {name: "Yuggoth",img: "https://f4.bcbits.com/img/a0237132468_2.jpg", BcUrl:'https://acidwarlock.bandcamp.com/album/y-u-g-g-o-t-h'},
//   {name: "Playing With My Demons",img: "https://f4.bcbits.com/img/a0435202383_2.jpg", BcUrl:'https://acidwarlock.bandcamp.com/album/playing-with-my-demons'},
//   {name: "Black Modular Magic",img: "https://f4.bcbits.com/img/a0438711002_2.jpg", BcUrl:'https://acidwarlock.bandcamp.com/album/black-modular-magic'},
//   {name: "Limited Perception",img: "https://f4.bcbits.com/img/a3774660422_2.jpg", BcUrl:'https://acidwarlock.bandcamp.com/album/limited-perception'},
//   {name: "You can't Stop",img: "https://f4.bcbits.com/img/a3160328181_2.jpg", BcUrl:'https://acidwarlock.bandcamp.com/track/you-cant-stop'},
//   {name: "Abyss is Calling",img: "https://f4.bcbits.com/img/a1924970748_2.jpg", BcUrl:'https://acidwarlock.bandcamp.com/track/abyss-is-calling'},
//   {name: "Dark Magic & Digital Spells ",img: "https://f4.bcbits.com/img/a1281332966_2.jpg", BcUrl:'https://acidwarlock.bandcamp.com/album/dark-magic-digital-spells'},
//   {name: "Flanger Monster",img: "https://f4.bcbits.com/img/a0629321569_2.jpg", BcUrl:'https://acidwarlock.bandcamp.com/track/flanger-monster'},
//   {name: " ☻ ☻ ☻ ☻ ", img: "https://f4.bcbits.com/img/a3608578737_2.jpg", BcUrl:'https://acidwarlock.bandcamp.com/track/-'},
//   {name: "Tekno Goblin",img: "https://f4.bcbits.com/img/a0366193300_2.jpg", BcUrl:'https://acidwarlock.bandcamp.com/track/tekno-goblin'},
// ]
},
{
name: "ACIDOSIS",
noDesc: false,
genre: "Acidcore / Mental",
cateogry: "Liveset",
img: "/../assets/Acidosis.jpeg",
ScLink: "https://soundcloud.com/acid-osis", 
SpLink: "https://open.spotify.com/artist/2qqhsZWUrfGrBEZxFWNisI",
IgLink:"https://www.instagram.com/alber_acidosis/ ",
Active: false,
hasAlbum: false,
// releases: [
//   {name: "Cognitive Distorsion",img: "https://f4.bcbits.com/img/a0584799096_16.jpg", BcUrl:'https://cursed-dissonances.bandcamp.com/album/ritual-05-dementia'},
//   {name: "Nothing New Under the Moon",img: "https://f4.bcbits.com/img/a1512673893_2.jpg", BcUrl:'https://acid0sis.bandcamp.com/track/nothing-new-under-the-moon'},
//   {name: "Mal Presagio",img: "https://f4.bcbits.com/img/a1811845195_2.jpg", BcUrl:'https://acid0sis.bandcamp.com/track/mal-presagio'},
//   {name: "Evisceration",img: "https://f4.bcbits.com/img/a1543100506_2.jpg", BcUrl:'https://acid0sis.bandcamp.com/track/evisceration'},
//   {name: "Siempre Estuve en Quiebra",img: "https://f4.bcbits.com/img/a2388287120_2.jpg", BcUrl:'https://acid0sis.bandcamp.com/track/siempre-estuve-en-quiebra'},
//   {name: "Bad for Health, Good for Education",img: "https://f4.bcbits.com/img/a1079675377_2.jpg", BcUrl:'https://acid0sis.bandcamp.com/track/bad-for-health-good-for-education'},
//   {name: "Illusions",img: "https://f4.bcbits.com/img/a1455306780_2.jpg", BcUrl:'https://acid0sis.bandcamp.com/track/illusions'},
//   {name: "Flotaing in Darkness",img: "https://f4.bcbits.com/img/a0454646868_2.jpg", BcUrl:'https://acid0sis.bandcamp.com/track/floating-in-darkness'},
//   {name: "Paralisis del Sueño",img: "https://f4.bcbits.com/img/a4260759128_2.jpg", BcUrl:'https://acid0sis.bandcamp.com/track/par-lisis-del-sue-o'},
//   {name: "Tears in Rain",img: "https://f4.bcbits.com/img/a1437982832_2.jpg", BcUrl:'https://acid0sis.bandcamp.com/track/tears-in-rain'},
// ]
},
{
name: "2AGR3",
noDesc: false,
genre: "Acidcore / Mental ",
cateogry: "",
img: "/../assets/2agr3.jpeg",
ScLink: "https://soundcloud.com/sagr3",
SpLink: "https://open.spotify.com/artist/4PCL8QS6DQP1TBVSFIgotT", 
IgLink:"https://www.instagram.com/sagr3_/ ",
Active: false,
hasAlbum: false,
// releases: [
//   {name: "Mellow",img: "https://f4.bcbits.com/img/a3209513802_16.jpg", BcUrl:'https://cursed-dissonances.bandcamp.com/track/mellow'},
//   {name: "Wrong Way",img: "https://f4.bcbits.com/img/a3057557841_2.jpg", BcUrl:'https://2agr3.bandcamp.com/track/wrong-way'},
//   {name: "Justicia Divina",img: "https://f4.bcbits.com/img/a2218217319_2.jpg", BcUrl:'https://2agr3.bandcamp.com/track/justicia-divina'},
//   {name: "Magic Pumpkin",img: "https://f4.bcbits.com/img/a3140623710_2.jpg", BcUrl:'https://2agr3.bandcamp.com/track/magic-pumpkin'},
// ]
},
{
name: "ACIDVARS",
noDesc: false,
genre: "Acidcore / Mental ",
cateogry: "",
img: "/../assets/AcidVars.jpeg",
ScLink: "https://soundcloud.com/alex-vars", 
SpLink: "https://open.spotify.com/artist/5xkwW0XmCyZPE2l7XZr4f0", 
IgLink:"https://www.instagram.com/acidvars/ ",
Active: false,

hasAlbum: true,

albums:[
  // {name: "Old Sets",img: "https://f4.bcbits.com/img/a1902075313_2.jpg",
  // songs: [
  //   {name:"Escape Bubble"},{name:"Free Tekno!"},{name:"Fuck System"},{name:"Mallorka No Dorm"},{name:"Sinestesia"},{name:"TeKno"},{name:"Rave is not Dead"}],
  //   BcUrl:'https://acidvars.bandcamp.com/album/old-sets'},

],
// releases: [
//   {name: "Sine",img: "https://f4.bcbits.com/img/a2543413402_16.jpg", BcUrl:'https://cursed-dissonances.bandcamp.com/track/sine'},
//   {name: "Parallels Worlds",img: "https://f4.bcbits.com/img/a3118983340_2.jpg", BcUrl:'https://acidvars.bandcamp.com/track/parallels-worlds'},
//   {name: "Red Moon",img: "https://f4.bcbits.com/img/a0587743174_2.jpg", BcUrl:'https://acidvars.bandcamp.com/track/red-moon'},
//   {name: "The Devil's Son",img: "https://f4.bcbits.com/img/a1866531653_2.jpg", BcUrl:'https://acidvars.bandcamp.com/track/the-devils-son'},
//   {name: "Dark Road",img: "https://f4.bcbits.com/img/a1635752329_2.jpg", BcUrl:'https://acidvars.bandcamp.com/track/dark-road'},
// ]
},
{
name: "NAKKORE",
desc: "Nacido en Cartagena, migró a Bristol, UK en 2017. Su música goza de mezclas tribales, líneas ácidas, llena de percusiones y ritmos variados con Kicks bien distorsionados, que trata de seguir un recorrido emocional a lo largo de sus performances.",
noDesc: true,
genre: "Acidcore / Mental ",
cateogry: "",
img: "/../assets/Nakkore.jpeg",
ScLink: "https://soundcloud.com/gines-nieto-aroca",
SpLink: "https://open.spotify.com/artist/1xDUaF9gJ5cz7olsVpwXkl", 
IgLink:"https://www.instagram.com/narcorleone/ ",
Active: false,

hasAlbum: true,
// albums:[
//   {name: "The Goblin Trinity E.P.",img: "https://f4.bcbits.com/img/a3899827238_2.jpg",
//   songs: [
//     {name:"Trasgo"},{name:"Kobold"},{name:"Bauchan"}],
//   BcUrl:'https://nakkore.bandcamp.com/album/the-gobblin-trinity-e-p'},   
//   {name: "Vacuum Force [Analog E.P.]",img: "https://f4.bcbits.com/img/a1428083445_16.jpg",
//   songs: [
//     {name:"Pink Rocket 2CB"},{name:" Where is Home"},{name:" Alfa Centauri"},{name:" In the Spider Nest"}],
//   BcUrl:'https://nakkore.bandcamp.com/album/vacuum-force-analog-e-p'},
//     ],
// releases: [
//   {name: "Yükan",img: "https://f4.bcbits.com/img/a0376850641_16.jpg", BcUrl:'https://nakkore.bandcamp.com/track/y-kan-nakkore-diuko303'},
//   {name: "Dead End",img: "https://f4.bcbits.com/img/a2238325688_2.jpg", BcUrl:'https://nakkore.bandcamp.com/album/nakkore-dead-end'},
//   {name: "Filibustier",img: "https://f4.bcbits.com/img/a1639351426_2.jpg", BcUrl:'https://nakkore.bandcamp.com/track/filibustier-nakkore-vs-acidvars-vs-manolo'},
//   {name: "Rotten Tusk",img: "https://f4.bcbits.com/img/a3888097045_2.jpg", BcUrl:'https://nakkore.bandcamp.com/track/nakkore-rotten-tusk'},
//   {name: "Olorun",img: "https://f4.bcbits.com/img/a3683380093_2.jpg", BcUrl:'https://nakkore.bandcamp.com/track/nakkore-l-run'},
//   {name: "The Day of Riot",img: "https://f4.bcbits.com/img/a1454910940_2.jpg", BcUrl:'https://nakkore.bandcamp.com/track/nakkore-x-acid-vars-the-day-of-riot'},
//   {name: "Eskalaborn",img: "https://f4.bcbits.com/img/a2450250245_2.jpg", BcUrl:'https://nakkore.bandcamp.com/track/nakkore-x-nkh-nth-eskalaborn'},
//   {name: "Toxic Zone",img: "https://f4.bcbits.com/img/a3310415465_2.jpg", BcUrl:'https://nakkore.bandcamp.com/track/nakkore-toxic-zone-live-edit'},
//   {name: "Needle Soup",img: "https://f4.bcbits.com/img/a3862618397_2.jpg", BcUrl:'https://nakkore.bandcamp.com/track/needle-soup'},
//   {name: "The Markarian",img: "https://f4.bcbits.com/img/a3394862603_2.jpg", BcUrl:'https://nakkore.bandcamp.com/track/the-markarian'},
//   {name: "Tekatlipoka",img: "https://f4.bcbits.com/img/a0568706166_2.jpg", BcUrl:'https://nakkore.bandcamp.com/track/tekatlipoka'},
//   {name: "Hammer Head",img: "https://f4.bcbits.com/img/a3033488714_2.jpg", BcUrl:'https://nakkore.bandcamp.com/track/hammer-head'},
//   {name: "Outsiders",img: "https://f4.bcbits.com/img/a2181522117_2.jpg", BcUrl:'https://nakkore.bandcamp.com/track/nakkore-outsiders'},
//   {name: "Spanishment",img: "https://f4.bcbits.com/img/a2834986054_2.jpg", BcUrl:'https://nakkore.bandcamp.com/track/nakkore-spanishment-ft-aliendolefreak'},
//   {name: "Don't knock the Mob",img: "https://f4.bcbits.com/img/a1076162781_2.jpg", BcUrl:'https://nakkore.bandcamp.com/album/dont-knock-the-mob'},
//   {name: "Chat Too Much",img: "https://f4.bcbits.com/img/a0842323457_2.jpg", BcUrl:'https://nakkore.bandcamp.com/album/chat-too-much'},
// ]
},
{
name: "NOISE FREQUENCY",
noDesc: false,
genre: "Acidcore / Mental ",
cateogry: "",
img: "/../assets/Edgar303.jpeg",
ScLink: "https://soundcloud.com/edgr303_noisefrequency", 
IgLink:"https://www.instagram.com/noise_frequency/ ",
Active: true,
hasAlbum: false,
releases: [
  {name: "Lost Humanity",img: "https://i1.sndcdn.com/artworks-fu4uvU6uTcgUXCmG-j62XEQ-t500x500.jpg", ScUrl:"https://soundcloud.com/noisefrequency/noise-frequency-lost-humanity-1"},
  {name: "Selfdestruction",img: "https://i1.sndcdn.com/artworks-OupvuIlze8wyQubS-1Rf9MQ-t500x500.jpg",ScUrl:"https://soundcloud.com/noisefrequency/edgr303"},
  {name: "Curvature",img: "https://i1.sndcdn.com/artworks-gzyU40jKzaOSnxdu-RGbDjg-t500x500.jpg",ScUrl:"https://soundcloud.com/noisefrequency/edgr303-curvature-1"},
  // {name: "Test",img: "https://i1.sndcdn.com/artworks-0eN7Dyy537g5OM1D-JtSAmA-t500x500.jpg",ScLink:""},
  {name: "No Exit",img: "https://i1.sndcdn.com/artworks-r7RvOj8mWdVZY8yu-035QgQ-t500x500.jpg",ScUrl:"https://soundcloud.com/noisefrequency/edgr303-no-exit-extract-no-master"},
  {name: "Kill da System",img: "https://i1.sndcdn.com/artworks-2H7gd69myMLcvXeO-zO0zzA-t500x500.jpg",ScUrl:"https://soundcloud.com/noisefrequency/edgr303-kill-da-system"},
  {name: "Black Death",img: "https://i1.sndcdn.com/artworks-7OshwdD7JJ1Nla96-NBIqLQ-t500x500.jpg",ScUrl:"https://soundcloud.com/noisefrequency/edgr303-black-death-1"},
  {name: "CO.VID.303",img: "https://i1.sndcdn.com/artworks-i1HjGVdb6ApZl5Nz-k4kDbA-t500x500.jpg",ScUrl:"https://soundcloud.com/noisefrequency/edgr303-covid303-extract-1"},
  // {name: "Fractal Mind",img: "https://i1.sndcdn.com/artworks-000588465056-oem21h-t500x500.jpg"},
  // {name: "Furtive Acid",img: "https://i1.sndcdn.com/avatars-5YAuhH1SpkFMigCy-DtoRxg-t500x500.jpg"},
  // {name: "WestWorld",img: "https://i1.sndcdn.com/artworks-000392840475-017653-t500x500.jpg"},


]
},
{
name: "CIKLO",
noDesc: false,
genre: "Acidcore / Mental ",
cateogry: "",
img: "/../assets/Ciklo.jpeg",
ScLink: "https://soundcloud.com/ciklo303", 
SpLink: "https://open.spotify.com/artist/5L5f4fmMma2QDJxoN0hjaf", 
IgLink:"https://www.instagram.com/ciklo__/ ",
Active: false,
hasAlbum: false,
// releases: [
//   {name: "Maldito",img: "https://f4.bcbits.com/img/a3287202948_16.jpg", BcUrl:"https://ciklo.bandcamp.com/track/ciklo-maldito-dem-u027"},
//   {name: "Fallen Kings",img: "https://i1.sndcdn.com/artworks-L4hQko3wSYuBvqB2-Vk1mrw-t500x500.jpg", BcUrl:"https://cursed-dissonances.bandcamp.com/track/hempti"},
//   {name: "Hempti",img: "https://f4.bcbits.com/img/a0448393636_16.jpg", BcUrl:"https://cursed-dissonances.bandcamp.com/track/hempti"},
//   {name: "I'm the Virus",img: "https://i1.sndcdn.com/artworks-4yrPIRWXKkdoYWVS-1Y6czw-t500x500.jpg", ScUrl:"https://soundcloud.com/ciklo303/savage-nihilism-ft-ciklo-im-the-virus"},
//   {name: "Mess My Mind",img: "https://i1.sndcdn.com/artworks-pDDTWW6704NGpzl4-DlG8AA-t500x500.jpg", ScUrl:"https://soundcloud.com/ciklo303/ciklo-mess-my-mind"},
//   {name: "Acid Train",img: "https://i1.sndcdn.com/artworks-OqiODFhNtUuZaYkI-0bAuhg-t500x500.jpg", ScUrl:"https://soundcloud.com/ciklo303/ciklo-acid-train"},
//   {name: "Deep Sea",img: "https://i1.sndcdn.com/artworks-0yZvGEtqbIJa1Ljb-iwhrIQ-t500x500.jpg", ScUrl:"https://soundcloud.com/ciklo303/ciklo-deap-sea"},
//   {name: "We are not Alone",img: "https://i1.sndcdn.com/artworks-Fcv1zVPNFCRLdr5L-0p9dPw-t500x500.jpg", ScUrl:"https://soundcloud.com/ciklo303/ciklo-we-are-not-alone-out-soon-on-artek-records"},
//   {name: "And Other",img: "https://i1.sndcdn.com/artworks-wrZJOXuys4ET2u1O-QKFenw-t500x500.jpg", BcUrl:'https://ciklo.bandcamp.com/track/and-other?from=com-nr'},
//   {name: "Voltage",img: "https://i1.sndcdn.com/artworks-6YarGzzalcwcpMx5-Kwi4HQ-t500x500.jpg", ScUrl:"https://soundcloud.com/ciklo303/ciklo-vs-csipo-voltage"},
//   {name: "Unfortune",img: "https://i1.sndcdn.com/artworks-000653063518-ce9tta-t500x500.jpg", ScUrl:"https://soundcloud.com/ciklo303/ciklo-unfortune-out-soon-on"},
// ]
},
{
name: "THE END IS NIGHT",
desc: "The End Is Night es el nuevo proyecto del anteriormente conocido como Socratek. Es un viaje que busca dejar atrás los ácidos melódicos y los artificios para ahondar en los ritmos hipnóticos y los paisajes distópicos. Siempre desde la distorsión característica de géneros como el mental o el industrial.",
noDesc: true,
genre: "Acidcore / Mental ",
cateogry: "",
img: "/../assets/Socratek.jpeg",
ScLink: "https://soundcloud.com/tein_tekno", 
SpLink: "https://open.spotify.com/artist/7KMeV1pz1zUjBlyj8tfAt2",
IgLink:"https://www.instagram.com/tein_tekno/",
BcLink: "https://tein.bandcamp.com",
Active: false,
hasAlbum: false,
releases: [
  {name: "Tiempo",img: "https://f4.bcbits.com/img/a4103417320_16.jpg", BcUrl:'https://tein.bandcamp.com/track/tiempo'},
  {name: "Mala Racha",img: "https://f4.bcbits.com/img/a1730478701_2.jpg", BcUrl:'https://tein.bandcamp.com/track/mala-racha'},
  {name: "Violent Thoughts",img: "https://f4.bcbits.com/img/a2878141595_2.jpg", BcUrl:'https://tein.bandcamp.com/track/violent-thoughts-w-acidosis'},
  {name: "Primordial Chaos",img: "https://f4.bcbits.com/img/a4208145540_2.jpg", BcUrl:'https://tein.bandcamp.com/track/primordial-chaos'},
  {name: "Nyx",img: "https://f4.bcbits.com/img/a2751441489_2.jpg", BcUrl:'https://tein.bandcamp.com/track/socratek-nyx'},
  {name: "Lost Sensations",img: "https://f4.bcbits.com/img/a2706687875_2.jpg", BcUrl:'https://tein.bandcamp.com/track/lost-sensations-a-k-a-mal'},
  // {name: "The Void",img: "https://f4.bcbits.com/img/a4229977181_2.jpg", BcUrl:'https://tein.bandcamp.com/track/the-void'},
  {name: "Náyade",img: "https://f4.bcbits.com/img/a3674322703_2.jpg", BcUrl:'https://tein.bandcamp.com/track/socratek-n-yade'},
  {name: "Erinias",img: 'https://f4.bcbits.com/img/a0358838016_2.jpg',BcUrl: "https://tein.bandcamp.com/track/socratek-ares"},
  {name: "Apathos",img: "https://f4.bcbits.com/img/a3531942777_2.jpg", BcUrl:'https://tein.bandcamp.com/track/socratek-apathos'},
]
},
{
name: "MOLDETEK",
noDesc: false,
genre: "Acidcore / Mental ",
cateogry: "",
img: "/../assets/Moldetek.jpeg",
ScLink: "https://soundcloud.com/moldetek", 
SpLink: "https://open.spotify.com/artist/7Cs6RLKKTh4KAeBnyZy5PW", 
IgLink:"https://www.instagram.com/moldetek/ ",
hasAlbum: false,
Active: true,
releases: [
  {name: "Tarnished",img: "https://f4.bcbits.com/img/a2215152209_10.jpg", BcUrl:'https://moldetek.bandcamp.com/track/house-harkonnen-moldetek'},
  {name: "Tarnished",img: "https://f4.bcbits.com/img/a0188226870_16.jpg", BcUrl:'https://moldetek.bandcamp.com/track/we-must-fight-moldetek'},
  {name: "Tarnished",img: "https://f4.bcbits.com/img/a0672301912_2.jpg", BcUrl:'https://moldetek.bandcamp.com/track/tarnished-moldetek'},
  {name: "Paimon",img: "https://f4.bcbits.com/img/a1858492447_2.jpg", BcUrl:'https://moldetek.bandcamp.com/track/paimon-moldetek'},
  {name: "Error-303",img: "https://f4.bcbits.com/img/a2581992381_2.jpg", BcUrl:'https://moldetek.bandcamp.com/track/error-303-moldetek'},
  {name: "House Atreides",img: "https://f4.bcbits.com/img/a3443048531_2.jpg", BcUrl:'https://moldetek.bandcamp.com/track/house-atreides-moldetek'},
  {name: "Prisoners",img: "https://f4.bcbits.com/img/a2819497169_2.jpg", BcUrl:'https://moldetek.bandcamp.com/track/prisoners-moldetek'},

]
},
// {
// name: "NKH NTH",
// noDesc: false,
// genre: "Trib / Hardtek / Acidcore ",
// cateogry: "",
// img: "/../assets/NkhNth.jpeg",
// ScLink: "https://soundcloud.com/nkhnth", 
// SpLink: "https://open.spotify.com/artist/7s27nqxmGvbifhid3BTls0", 
// IgLink:"https://www.instagram.com/2nkh_nth3/ ",
// Active: false,
// hasAlbum: true,
// // albums:[
// //   {name: "Icebergs",img: "https://f4.bcbits.com/img/a3457364841_16.jpg",
// //   songs: [
// //     {name:"Ice Galaxy"},{name:"Ice Forest"}],
// //   BcUrl:'https://nkhnth.bandcamp.com/album/icebergs'},   
// //   {name: "Mountain Hugs",img: "https://f4.bcbits.com/img/a0795113604_16.jpg",
// //   songs: [
// //     {name:"On the Edge of the Limit"},{name:"Descending Heavens"},],
// //   BcUrl:'https://nkhnth.bandcamp.com/album/mountain-hugs'},
// //   {name: "Inferno",img: "https://f4.bcbits.com/img/a3834998694_2.jpg",
// //   songs: [
// //     {name:"La Verdad"},{name:"Night at the Opera"},{name:"Eko Nymhp"},],
// //   BcUrl:'https://nkhnth.bandcamp.com/album/inferno'},
// //   {name: "Geoculus",img: "https://f4.bcbits.com/img/a0256755097_16.jpg",
// //   songs: [
// //     {name:"Steep Bass"},{name:"Explaining the Unexplained"},{name:"Paths of Space"},{name:"Dependance on Nature"},{name:" Fir Tree"},{name:"Meteorite Waterfalls"},],
// // BcUrl:'https://nkhnth.bandcamp.com/album/geoculus'},
// // {name: "Fine Day, Fine Night",img: "https://f4.bcbits.com/img/a3014276573_16.jpg",
// // songs: [
// //   {name:"Fine Day"},{name:"Fine Night"},],
// // BcUrl:'https://nkhnth.bandcamp.com/album/fine-day-good-night'},
// //   ],
// // releases: [
// //   {name: "Nuclear",img: "https://f4.bcbits.com/img/a1044319904_10.jpg", BcUrl:'https://nkhnth.bandcamp.com/track/nuclear'},
// //   {name: "6 To Wav Rem",img: "https://f4.bcbits.com/img/a1035942717_16.jpg", BcUrl:'https://nkhnth.bandcamp.com/track/6-to-wav-rem'},
// //   {name: "HEARTTEK",img: "https://f4.bcbits.com/img/a1435821445_16.jpg", BcUrl:'https://nkhnth.bandcamp.com/track/hearttek'},
// //   {name: "KABOB 23",img: "https://f4.bcbits.com/img/a2741192429_16.jpg", BcUrl:'https://nkhnth.bandcamp.com/track/kabob-23'},
// //   {name: "Limbo d'Aneu",img: "https://f4.bcbits.com/img/a1287094397_16.jpg", BcUrl:'https://nkhnth.bandcamp.com/track/limbo-daneu'},
// //   {name: "Peülla",img: "https://f4.bcbits.com/img/a0788357757_16.jpg", BcUrl:'https://nkhnth.bandcamp.com/track/pe-lla'},
// //   {name: "Runchill",img: "https://f4.bcbits.com/img/a1484819442_16.jpg", BcUrl:'https://nkhnth.bandcamp.com/track/runchill'},
// //   {name: "Space Rain (Piano Intro)",img: "https://f4.bcbits.com/img/a1756326207_16.jpg", BcUrl:'https://nkhnth.bandcamp.com/track/space-rain-piano-intro'},
// //   {name: "THC",img: "https://f4.bcbits.com/img/a3973012017_16.jpg", BcUrl:'https://nkhnth.bandcamp.com/track/thc'},
// //   {name: "Tengo una Esperanzita",img: "https://f4.bcbits.com/img/a4014523406_16.jpg", BcUrl:'https://nkhnth.bandcamp.com/track/tengo-una-esperanzita'},

// // ]
// },
{
name: "ABEX",
noDesc: false,
genre: "Trib / Hardtek / Acidcore ",
cateogry: "",
img: "/../assets/Abex.jpeg",
ScLink: "https://soundcloud.com/abelfree23", 
SpLink: "https://open.spotify.com/artist/14tAd2KcpGaOxDf6a5rdm2", 
IgLink:"https://www.instagram.com/abex_303/ ",
Active: false,
hasAlbum: false,
// releases: [
//   {name: "Silence on my Dreams",img: "https://i1.sndcdn.com/artworks-WBwJv0dd2IjxzbQ0-JoTxLQ-t500x500.jpg", ScUrl:'https://soundcloud.com/abelfree23/abex-silence-on-my-dreams-m2'},
//   {name: "Curses and Spells",img: "https://i1.sndcdn.com/artworks-tanmNRUjIGbRiV2d-x9aCnA-t500x500.jpg", BcUrl:'https://cursed-dissonances.bandcamp.com/track/curses-and-spells'},
//   {name: "SaftyPin",img: "https://i1.sndcdn.com/artworks-tanmNRUjIGbRiV2d-x9aCnA-t500x500.jpg", ScUrl:'https://soundcloud.com/abelfree23/abex-303-saftypin'},
//   {name: "extract 002#live",img: "https://i1.sndcdn.com/artworks-tanmNRUjIGbRiV2d-x9aCnA-t500x500.jpg", ScUrl:'https://soundcloud.com/abelfree23/extract-002live'},
//   {name: "live 001#",img: "https://i1.sndcdn.com/artworks-tanmNRUjIGbRiV2d-x9aCnA-t500x500.jpg", ScUrl:'https://soundcloud.com/abelfree23/live-001'},
//     ]
},
{
name: "GLVZ",
noDesc: false,
genre: "Trib / Hardtek / Acidcore ",
cateogry: "",
img: "/../assets/Galvez.jpeg",
ScLink: "https://soundcloud.com/glvz23", 
IgLink:"https://www.instagram.com/__g.a.l.v.e.z__/ ", 
Active: false,
hasAlbum: false,
// releases: [
//   {name: "Take Care",img: "https://soundcloud.com/glvz23/take-care", ScUrl:'https://soundcloud.com/glvz23/take-care'},
//   {name: "A Dojo",img: "https://i1.sndcdn.com/artworks-cvHrt8j8oEGxIYyq-HWRhjA-t500x500.jpg", ScUrl:'https://soundcloud.com/glvz23/adojo-master-wav'},
//   {name: "La Danza del Moai",img: "https://f4.bcbits.com/img/a1046423670_16.jpg", BcUrl:'https://cursed-dissonances.bandcamp.com/track/la-danza-del-moai'},
//   ]
},
{
name: "PK",
noDesc: false,
genre: "Trib / Hardtek / Acidcore ",
cateogry: "",
img: "/../assets/Pk.jpeg",
ScLink: " https://soundcloud.com/piskas303/", 
IgLink:"https://www.instagram.com/psyyka0s_/ ",
hasAlbum: false,
Active: false,
// releases: [
//   {name: "Live Extract ",img: "https://i1.sndcdn.com/artworks-kzuF92scZcfz8QSt-TYfWQQ-t500x500.jpg", ScUrl:'https://soundcloud.com/cursed_dissonances/pkaextract'},

//     ]
},
{
name: "REYMON",
noDesc: false,
genre: "Trib / Hardtek / Acidcore ",
cateogry: "",
img: "/../assets/Reymon.jpeg",
ScLink: "https://soundcloud.com/akareymon/", 
IgLink:"https://www.instagram.com/akareymon/",
Active: false,
hasAlbum: false,
// releases: [
//   {name: "Apoptosis",img: "https://i1.sndcdn.com/artworks-W8yrPypyhIs583uA-aiA1qQ-t200x200.jpg", ScUrl:'https://soundcloud.com/cursed_dissonances/reyapoteosis'},

//     ]
},
{
name: "Hobs",
noDesc: true,
desc: "HOBS es un artista de acidcore/mentalcore conocido por su música electrónica experimental intensa y compleja. Combina elementos del acid techno y el hardcore con texturas sonoras abstractas y atmosféricas. HOBS busca transmitir narrativas y experiencias emocionales a través de su música, incorporando samples y texturas distorsionadas. Sus actuaciones en vivo son cautivadoras, utilizando controladoras y sintetizadores para transformar su música en el escenario.",

genre: "Trib / Hardtek / Acidcore ",
cateogry: "",
img: "/../assets/logonobg.png",
ScLink: "https://soundcloud.com/hobbats", 
IgLink:"NONE",
hasAlbum: false,
Active: true,
releases: [
  {name: "Trying To Escape",img: "https://i1.sndcdn.com/artworks-Fdnbr6DpQ5YxwJnb-nDI51w-t500x500.jpg", ScUrl:'https://soundcloud.com/hobbats/tto'},
  {name: "Lassitudine Ad Ventum",img: "https://i1.sndcdn.com/artworks-umDsvQsKq0nTRl9f-DBDyng-t500x500.jpg", ScUrl:'https://soundcloud.com/hobbats/lassitudine-ad-ventum-2'},
  {name: "Mental Round",img: "https://i1.sndcdn.com/artworks-lH7UkCTi84S5IJWv-cx4t4Q-t500x500.jpg", ScUrl:'https://soundcloud.com/hobbats/mental-round'},
  {name: "It's Squelch season!",img: "https://i1.sndcdn.com/artworks-E9skf6qDNjqLS9vP-3rQtFw-t500x500.jpg", ScUrl:'https://soundcloud.com/hobbats/its-squelch-season'},
  {name: "Claustrophobic Tunnels",img: "https://i1.sndcdn.com/artworks-LQHWNVSQY9O7qxka-GAujIw-t500x500.jpg", ScUrl:'https://soundcloud.com/hobbats/claustrophobic-tunnels-no-master'},

    ]
},
{
name:"Fullet",
noDesc: false,
desc: "lorem",
img:"/../assets/Fullet.png",
genre: "Trib / Hardtek / Acidcore ",
cateogry: "",
ScLink: "https://soundcloud.com/hobbats", 
IgLink:"NONE",
Active: false,
hasAlbum: false,
// releases: [
//   {name: "El Baile de los Kaidos Benefik Party",img: "https://i1.sndcdn.com/avatars-000420335208-kxuv8d-t500x500.jpg", ScUrl:'https://soundcloud.com/r-now-r-now/el-baile-de-los-kaidos-benefik-party'},
//   {name: "Apocaliptic Benefik Party 6/12 ",img: "https://i1.sndcdn.com/artworks-WyIUr8zxazp6soyB-m0EeFw-t500x500.jpg", ScUrl:'https://soundcloud.com/r-now-r-now/apocaliptic-benefik-party-612-tribe-tekno-to-mental'},
// ]
}
]  
constructor() { }
  getArtistList():Artist[]{

    return this.artistList;
  }

  getArtist (idx: any){
    return this.artistList[idx];
  }
   



  buscarArtistList (termino:string):Artist[]{
  
    let ArtistListArr:Artist[]=[];
    termino = termino.toLowerCase();
  
    for (let artist of this.artistList ){
  
      let name = artist.name.toUpperCase();
  
      if( name.indexOf( termino) >= 0 ){
        ArtistListArr.push ( artist)
      }
    }
  
    return ArtistListArr;
  }

  buscar (termino:string){
    console.log(termino)
  }
}

