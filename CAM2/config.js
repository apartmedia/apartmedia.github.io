/*!
  * SMTAV PTZ Cam Conbtroller
  * Konfigurationseinstellungen
  */

const APP_TITLE = "PTZ CAM Controller";

// Standardkonfiguration definieren
const DEFAULT_SETTINGS = {
    camera_ip: "192.168.100.12",
    camera_name: "CAM 2",
    camera_alias: "Chor",
    speed_pan: 8,
    speed_tilt: 8,
    speed_zoom: 5,
    speed_focus: 3
};

// Jede Kamera muss einen eigenen eindeutigen Storage-Key besitzen
const STORAGE_KEY = "ptz_camera_settings_2";
// Prüfintervall des Online Status der Kamera in ms
// um den Netzwerktraffic gering zu halten sollte jede Kamera einen leicht abweichenden Wert erhalten
const CHECK_INTERVAL = 10000;
const HTTP_API_PATH = "/cgi-bin/ptzctrl.cgi";