'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "30d38b334d0f5526d8a9525257d6288a",
"version.json": "c8b4570bc368236d785b1ff93fea509d",
"index.html": "a032e345167631abc32d6347daa1d254",
"/": "a032e345167631abc32d6347daa1d254",
"main.dart.js": "fb9e84c957af5ff85373a57dcbded63c",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0d53c0209ec3ddc54bdbe4708b369d62",
"assets/AssetManifest.json": "23c02be09d0deb4c97aa16be660e21ce",
"assets/NOTICES": "03666fd57599a3fdd936779b47a8c7e8",
"assets/FontManifest.json": "436bb6f2f793531cfb29232cf325cecb",
"assets/AssetManifest.bin.json": "28101c8792e1997e2628710599e08f9a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9943587ada2e42ff3b365ebfa72f501a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "42fd47f6c891dbac063960b1ae7312e1",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "575b0fe4490538b6f7b298ab34f24dcc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "244519f4ed87efc6c7f0c417b7c003d5",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/record_web/assets/js/record.worklet.js": "356bcfeddb8a625e3e2ba43ddf1cc13e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "00bbdf47f163a48e4e699ec887004fcf",
"assets/fonts/MaterialIcons-Regular.otf": "c61951f8be7a22a5fe85a6fb7438f22f",
"assets/assets/images/academics/dinner.png": "3eaa4cb16204d5a699ba2a93b432fa6c",
"assets/assets/images/academics/lunch.png": "3fe0511dcfe746bd5ac909b672da306c",
"assets/assets/images/academics/breakfast.png": "86a55bc213af46b74a4ba526d5c034a7",
"assets/assets/images/school.jpg": "cd1143688a43f6cd4738056fcab1aea5",
"assets/assets/images/file_icon.png": "22a7f85f5ddfc9819488dd2239e3a137",
"assets/assets/images/approved.jpg": "c0856375099170cbe357e5f652d144a4",
"assets/assets/images/launch_ic.png": "969d8aeafdb7c48e0f867eec96757431",
"assets/assets/images/default_profile_pic.jpg": "e5097d563c348bfe599257fa5a811d50",
"assets/assets/images/launch_ic-alpha.png": "b874c3bb83867d6d257b3417cc9d3900",
"assets/assets/images/default_group_pic.jpg": "61e875832a4977c8f8d645ed00875e7f",
"assets/assets/images/image_icon.png": "95abd7e0c9b227fe514cd57bdaaf845a",
"assets/assets/images/paynow.png": "527b908aaa821d43745614a9d3ab30ad",
"assets/assets/images/empty-box.png": "abed505ddcd06de6757d1d5cd51d367c",
"assets/assets/images/rejected.jpg": "4987b47098e6e8e2323cb43decc413de",
"assets/assets/images/attendance-view.jpeg": "7bcb2a75b22a5aa7fbd1df595dfe3a78",
"assets/assets/images/aiimages/icons8-timetable-50.png": "70e9f6704a07329e3279738134f59941",
"assets/assets/images/aiimages/feedback_1.png": "c0a232554759c2f62648997ec7a13870",
"assets/assets/images/aiimages/Gemini_Generated_Image-removebg-preview%2520(1).png": "40744cc21a9cf01c9428a42f8a537d19",
"assets/assets/images/aiimages/peer_to_peer_1.png": "914d9fead2dfc37fb3b7d1548cb0aff3",
"assets/assets/images/aiimages/unnamed-4-removebg-preview.png": "beed54454494dfffcdd2c2966f3234a4",
"assets/assets/images/aiimages/unnamed-removebg-preview%2520(1).png": "5f0cbaf924fea1b2f5157e0b71947fce",
"assets/assets/images/aiimages/unnamed-1-removebg-preview.png": "13325aaa2599bf52aeb3cfd5b4eb8b0f",
"assets/assets/images/aiimages/timetable_1.png": "0bef51844fe8abf72c1d094f2f70ed71",
"assets/assets/images/aiimages/hourly_attendence_1.png": "ee0e29c168b7642ea78843b4300a372c",
"assets/assets/images/aiimages/event_master_1.png": "3ba4a8338be53f81929aebe0cae7aa2f",
"assets/assets/images/aiimages/icons8-calender-85.png": "ec1433de32cde48b57acd616aab74b9b",
"assets/assets/images/aiimages/Gemini_Generated_Image%2520(2).jpeg": "f6c57c21e7e7d1b87119905ae43d8ce2",
"assets/assets/images/aiimages/icons8-quiz-50.png": "724865e425ca7887cce4c4681cb87c47",
"assets/assets/images/aiimages/quiz_1.png": "b91120b137107ac932cbc1cc7cfc9bff",
"assets/assets/images/aiimages/extra_curriculam_activity_1.png": "4efb1f24d95a6a648b2de06278a61cdc",
"assets/assets/images/aiimages/icons8-feedback-50.png": "ba8a3b338625533d012abd66f29da84d",
"assets/assets/images/aiimages/student_leave_application_1.png": "a4f4391792342d687bd0d68d1c005620",
"assets/assets/images/aiimages/icons8-library-50.png": "d5ada6a861939e648e86d4bad04fda6b",
"assets/assets/images/aiimages/icons8-certificate-50.png": "8c3442ba6533abd019813d50c629148b",
"assets/assets/images/aiimages/kitchen_form_1.png": "02dd3733c24470752602ac39fe417155",
"assets/assets/images/aiimages/students_1.png": "c8ffa173283053623d4710296c02e365",
"assets/assets/images/aiimages/icons8-survey-50.png": "e973a7ecb448fc3d42f459169b53da8e",
"assets/assets/images/aiimages/default_icon_1.png": "5bf67f0e746c0019e85225306a07e0b0",
"assets/assets/images/aiimages/evaluation_1.png": "595951dc772ca7f0c88907119e953aa2",
"assets/assets/images/aiimages/assessment_1.png": "507879bbe8febe06f6e4b6326167df6a",
"assets/assets/images/aiimages/icons8-assignment-50.png": "6ddf851e1b19113c71072542169522fa",
"assets/assets/images/aiimages/edc_attendence_1.png": "159b93b05979fb1db5ad1438e1e13a56",
"assets/assets/images/aiimages/talent_fest_1.png": "247a42466564cd2e5f327180def6a234",
"assets/assets/images/aiimages/observation_1.png": "38756e5c89f27c870dbcdfeb53bc00c7",
"assets/assets/images/aiimages/attendance_1.png": "4970faea18bd1e422c8ef8546fd71a55",
"assets/assets/images/aiimages/Gemini_Generated_Image%2520(1).jpeg": "f3f044f46fd9218610d11ca79761efa8",
"assets/assets/images/aiimages/accridation_1.png": "cf63e2219e876e4ffce5a122fbc359e3",
"assets/assets/images/aiimages/substitution_1.png": "27152349f88a09218adceb8e0dce1a6c",
"assets/assets/images/aiimages/Gemini_Generated_Image__2_-removebg-preview.png": "49582d8e5a34645f7f92ef7cc6e58eb0",
"assets/assets/images/aiimages/images-1.jpg": "9d9f6aa8fa841df4455cbb4d9d4cb823",
"assets/assets/images/aiimages/certificate_request_1.png": "b4ddfc3184bf937324a8c3b4e5d62fa3",
"assets/assets/images/aiimages/events_1.png": "0de901b14e89709b1071b78ed66eceeb",
"assets/assets/images/aiimages/icons8-event-64.png": "8c485061bf614dbc16775389555c7e24",
"assets/assets/images/aiimages/marks_list_1.png": "e81246ef350a7c5c0687f022fbf4fbd8",
"assets/assets/images/aiimages/unnamed-removebg-preview.png": "ccb3bd7d5ca548e8bf982baea54f60a0",
"assets/assets/images/aiimages/icons8-exam-50%2520(1).png": "3c506d3df5ac4d9a34d760778cd8751d",
"assets/assets/images/aiimages/attendence_not_entering_1.png": "3ada4178b43160a5c6be382680624bc3",
"assets/assets/images/aiimages/institution_1.png": "352769a782d9e3d3c837f77810367e6e",
"assets/assets/images/aiimages/unnamed-2-removebg-preview%2520(1).png": "1dcf69ccd9936ffb89b6951e012df8d3",
"assets/assets/images/aiimages/optional_language_1.png": "2fe063029a298bd519a4fa15931c66ce",
"assets/assets/images/aiimages/study_materials_1.png": "3d4fe27504b3078bbc84932217c5f5ab",
"assets/assets/images/aiimages/default_profile_pic.png": "d40479d874410d1343a0a7203d73eb99",
"assets/assets/images/aiimages/icons8-school-syllabus-study-schedule-and-timetable-planning-24.png": "4c60f9636a1b24d4c0444782d2096b00",
"assets/assets/images/aiimages/attendence_2.png": "5e0f58b3ad0df49d857f346ba42ee162",
"assets/assets/images/aiimages/icons8-evaluation-50.png": "d99248c5a2be51a1041804cbcb3a175a",
"assets/assets/images/aiimages/request_and_approval_1.png": "b780794123f783f9717721d94221f50d",
"assets/assets/images/aiimages/kO25xjRS6MurVmzbrhab7Cuck1w.webp": "23f5d9d84f10f0c9905fe5f51029c3b6",
"assets/assets/images/aiimages/icons8-exam-50.png": "3c506d3df5ac4d9a34d760778cd8751d",
"assets/assets/images/aiimages/school_1.png": "07e85ea2f25f1d7baa397c38654c7c64",
"assets/assets/images/aiimages/birthday_list_1.png": "e09cd17bff3e4a3942cb79f71213777d",
"assets/assets/images/aiimages/unnamed-3-removebg-preview.png": "cfadbf01b6bc1e2e7d0ac5818350898c",
"assets/assets/images/aiimages/icons8-event-50.png": "2beb45dc8baea706a0e2287ab3f840f6",
"assets/assets/images/aiimages/club_1.png": "2f2651e797f37659a76c6f0ec5ec0dda",
"assets/assets/images/aiimages/diary_1.png": "46ffcd4f816a5ba5c8f451de3f664b67",
"assets/assets/images/aiimages/pricipal_survey_1.png": "09c143810891728fdd10b8101568f2cf",
"assets/assets/images/aiimages/icons8-birthday-50.png": "718f1cb6f42fd5780d1e0c573340c0f1",
"assets/assets/images/aiimages/icons8-book-50.png": "7fb2671bd170e598e4a9859b4bac9257",
"assets/assets/images/aiimages/backgound_image.png": "a2a6b85cdeed61ce4cf7bf13e4c85262",
"assets/assets/images/aiimages/teacher_leave_application_1.png": "c6d3ad357345a4d9c3e19af14e189472",
"assets/assets/images/aiimages/digital_library_1.png": "4e9a7514c207fdb02e9e05b31cc058b6",
"assets/assets/images/aiimages/35139719092.jpg": "1012ed40d362ddc57881435643fa220c",
"assets/assets/images/aiimages/online_class_1.png": "85e418d7750b5b9789820afe1975b9ec",
"assets/assets/images/aiimages/club_attendence_1.png": "5552c8e70e0a2fca97bca855c4ab4ffc",
"assets/assets/images/aiimages/icons8-kawaii-french-fries-50.png": "110b7598300e461ebe0ce6683f5b89a0",
"assets/assets/images/aiimages/departments_1.png": "71ad49df8a020f22dc06f72a91cd9f3d",
"assets/assets/images/aiimages/Gemini_Generated_Image.jpeg": "a1767fb2bd0516ee1401d68e7aae9905",
"assets/assets/images/aiimages/remarks_1.png": "c461cdf2c3bd17b44ef397f605eab5c9",
"assets/assets/images/aiimages/happiness_department_1.png": "50c0c8f00c2ce076dd182ff5be2fa04c",
"assets/assets/images/aiimages/prgograms_1.png": "81d73ed98fba31894f4248df98938f93",
"assets/assets/images/aiimages/icons8-kawaii-noodle-50.png": "fce41a0ad5cbc6cd116ca48d9b2672c8",
"assets/assets/images/aiimages/background_image_2.jpg": "dcad0f877b01906ea67c3d875ce6d079",
"assets/assets/images/aiimages/icons8-favorite-64.png": "4f278f443e458db6dad071a222f21bcf",
"assets/assets/images/aiimages/Gemini_Generated_Image-removebg-preview.png": "40744cc21a9cf01c9428a42f8a537d19",
"assets/assets/images/aiimages/extra_class_attendence_1.png": "8ad582ab455c7dbf4a77827258776d49",
"assets/assets/images/aiimages/parents_feedback_1.png": "fe6666d8c356ad34e2d4f2e4b2103029",
"assets/assets/images/aiimages/Gemini_Generated_Image__1_-removebg-preview.png": "8a0ed29d75a57d62fdb745f6a5742821",
"assets/assets/images/aiimages/fees_1.png": "507a93d3314891510d096d172bb45df3",
"assets/assets/images/aiimages/assignment_2.png": "bd0f6fdd472371d46ab9c706ffe6462b",
"assets/assets/images/aiimages/icons8-attendance-64.png": "c726abd52f09e127f78ab095064fbc4e",
"assets/assets/images/aiimages/punchings_1.png": "c1435cf6bd04183f3fb2f23ce74d02cf",
"assets/assets/images/aiimages/assignments_1.png": "922c07c97852db4ef8051becf046d97a",
"assets/assets/images/aiimages/hod_survey_1.png": "03220b9bb56d41a49e69f16e893d2797",
"assets/assets/images/aiimages/images.jpg": "803cafc3c366db8b50a6d88afb3807b7",
"assets/assets/images/aiimages/unnamed-2-removebg-preview.png": "183c3ee2fa00c59836059bd89b41e4dd",
"assets/assets/images/aiimages/icons8-leave-50.png": "d1f45609358b574fb23ba6628e755127",
"assets/assets/images/aiimages/mess_report_1.png": "f2d5bf775688f1ebbc51ae972e45cd33",
"assets/assets/images/aiimages/deans_survey_1.png": "87b3f34fa402d37ab4fbfc231ccfd787",
"assets/assets/images/aiimages/icons8-student-50.png": "d14a15b8f37b2b63c047c42f335fe858",
"assets/assets/images/aiimages/syllabus_1.png": "a4189d8367855b750cd67d3ee27d3112",
"assets/assets/images/attend.jpeg": "2727591b16fd4c4ef89c9d85323565f9",
"assets/assets/icons/document.png": "5f8d38898423128dd7874e40bfe2b0ba",
"assets/assets/icons/launch_ic1.png": "969d8aeafdb7c48e0f867eec96757431",
"assets/assets/icons/launch_ic-alpha.png": "b874c3bb83867d6d257b3417cc9d3900",
"assets/assets/fonts/roboto_flex/RobotoSlab-VariableFont_wght.ttf": "639c828487a32043addce04bdf807f24",
"assets/assets/fonts/Freight%2520Text%2520Bold/Freight%2520Text%2520Bold.otf": "d4feed1b0479a803e7d74330995c856f",
"assets/assets/fonts/Braah_One/BraahOne-Regular.ttf": "7d7ba60195fd22ab0204642d564d3440",
"assets/assets/animations/Animation%2520-%25201710750964311.json": "ca374784b160bd0475d442d0df3c3596",
"assets/assets/animations/stafflist.json": "259ce58b558ef58b05f99306703e0144",
"assets/assets/animations/non-academics.json": "d0113c5be43cad403fdf1e2f42be2354",
"assets/assets/animations/fees.json": "248e10afd93d1c0461998a073b53e065",
"assets/assets/animations/academics.json": "6cf041cd49d3aa339587b3ba0e75fc20",
"assets/assets/animations/loading.json": "eb60aed347d04f69cb7dc692947e0284",
"assets/assets/animations/loading2.json": "33cbbcc34d02fde55d4bfd65b2c86dc3",
"assets/assets/animations/shimmer1.json": "815671b1aee946f13b3e158223591f33",
"assets/assets/animations/no_data.json": "db2c399ec770ea6069001915c923274f",
"assets/assets/animations/sun.json": "dd5c46568c3f644ef428dee8b431f416",
"assets/assets/animations/studentlist.json": "86d489d9c6f9c21d18f276b07f47be3e",
"assets/assets/animations/nodata.json": "327ef6b5f8b32e9e2f18a78c303d3e23",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
