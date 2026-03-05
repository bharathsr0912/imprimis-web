
import { Service } from "@/types/services";
import { Truck, Leaf, Droplets, Shield, Box } from "lucide-react";

export const services: Service[] = [
  // 1. FLEET MANAGEMENT
  {
    slug: "fleet-management",
    title: "Fleet Management",
    icon: Truck,
    short: "Monitor, manage, and optimise your vehicle fleet in real time — from a single dashboard.",
    description:
      "Imprimis Fleet Management gives businesses real-time visibility over their vehicles, drivers, and operations — all from one centralised dashboard. Track live locations, monitor driver behaviour, manage fuel usage, and receive instant alerts the moment something needs your attention. Whether you operate a small local fleet or manage vehicles across multiple sites, the platform gives your team a clear, accurate picture of everything happening on the ground.",
    images: ["/hero/fleet1.png"],
    heroImageAlt: "Aerial view of a fleet depot or logistics hub with IoT overlay",
    features: [
      "Live vehicle tracking",
      "Route optimisation",
      "Fuel & usage analytics",
      "Driver behaviour monitoring",
      "Geofencing & smart alerts",
      "Maintenance reminders",
    ],
    whatItDoes: [
      {
        title: "Live GPS Tracking",
        body: "See where every vehicle is at any moment on an interactive map. Location updates are fast and configurable, suited for city traffic and long-haul routes alike.",
        bulletPoints: [
          "Real-time vehicle positions on a live map",
          "Full route history and trip playback",
          "Configurable update frequency",
          "Works on 4G with automatic fallback in low-coverage areas",
        ],
        imageIcon: "📍",
        imageLabel: "Live GPS Tracking Map",
        imageNote: "Map view with vehicle location pins across a city or highway",
      },
      {
        title: "Driver Behaviour Monitoring",
        body: "Understand how your vehicles are being driven. The system automatically detects unsafe events and builds a driver score over time — giving you data to coach better habits and reduce vehicle wear.",
        bulletPoints: [
          "Harsh braking and rapid acceleration detection",
          "Speeding alerts with customisable thresholds",
          "Sharp cornering and erratic driving flags",
          "Per-driver scoring and historical reports",
        ],
        imageIcon: "🧠",
        imageLabel: "Driver Behaviour Dashboard",
        imageNote: "Charts or graphs showing driver scores and safety events",
      },
      {
        title: "Geofencing & Smart Alerts",
        body: "Draw virtual boundaries around depots, delivery areas, or restricted zones. Get instant notifications when a vehicle enters, exits, or deviates from an authorised route.",
        bulletPoints: [
          "Custom zones on any map area",
          "Entry, exit, and route deviation alerts",
          "Alerts via SMS, email, and push notification",
          "After-hours movement detection",
        ],
        imageIcon: "🗺️",
        imageLabel: "Geofence Zone on Map",
        imageNote: "Map with a boundary zone drawn around a depot or delivery area",
      },
    ],
    moreCapabilities: [
      { icon: "⛽", title: "Fuel Monitoring", description: "Track consumption per vehicle and trip. Identify wastage and unusual patterns early." },
      { icon: "🔧", title: "Maintenance Reminders", description: "Service alerts based on mileage or time intervals. Stay ahead of breakdowns proactively." },
      { icon: "📊", title: "Reports & Analytics", description: "Auto-generated trip summaries, utilisation reports, and logs. Export as PDF or CSV." },
      { icon: "🔑", title: "Driver Identification", description: "Assign every trip to a specific driver. Know who was behind the wheel at all times." },
      { icon: "📱", title: "Mobile App Access", description: "Full dashboard on iOS and Android. Monitor your fleet on the go from anywhere." },
      { icon: "🔔", title: "Tamper Detection", description: "Instant alert if a device is disconnected or tampered with. Protect your investment." },
    ],
    designedAround: {
      intro: "We don't believe in one-size-fits-all. Every fleet is unique — different vehicle types, different routes, different teams. Imprimis works with you to design and build a Fleet Management solution that fits your operations precisely.",
      cards: [
        { icon: "🔧", title: "Custom Hardware Configuration", description: "We select and set up the right tracking hardware for your specific vehicle types — cars, trucks, buses, heavy machinery, or two-wheelers." },
        { icon: "📊", title: "Tailored Dashboard & Reports", description: "Your dashboard is configured around the metrics that matter to your team — not a generic template." },
        { icon: "🔔", title: "Custom Alert Rules", description: "Geofences, speed limits, idle time thresholds, and notification channels all configured to match your operational needs." },
        { icon: "🔗", title: "Integration & Scalability", description: "Whether you're starting with 5 vehicles or scaling to 500, the solution grows with you and can integrate with your existing systems." },
      ],
    },
    cta: {
      heading: "Ready to get started with Fleet Management?",
      body: "Talk to our team to see how Imprimis can help you implement a real-time fleet solution tailored to your business.",
    },
  },

  // 2. ASSET TRACKING
  {
    slug: "asset-tracking",
    title: "Asset Tracking",
    icon: Box,
    short: "Real-time tracking and monitoring of your valuable assets — wherever they are.",
    description:
      "Imprimis Asset Tracking gives businesses complete visibility over their valuable equipment, inventory, and assets — in real time, from a single platform. Whether your assets are moving across a supply chain or stored across multiple facilities, you always know exactly where they are, their condition, and when something needs your attention.",
    images: ["/hero/a1.png"],
    heroImageAlt: "Warehouse or facility with IoT tracking overlay",
    features: [
      "Real-time asset location",
      "Theft detection & tamper alerts",
      "Usage analytics & reporting",
      "Asset tagging & registry",
      "Custom alert rules",
      "API & system integration",
    ],
    whatItDoes: [
      {
        title: "Real-Time Asset Location",
        body: "Track every tagged asset on a live map — indoors, outdoors, or across multiple sites. Know exactly where your equipment and inventory are at any point in time, without manual checks or phone calls.",
        bulletPoints: [
          "Live location updates for all tracked assets",
          "Indoor and outdoor tracking support",
          "Multi-site visibility from a single dashboard",
          "Full movement history and location timeline",
        ],
        imageIcon: "📍",
        imageLabel: "Live Asset Location Map",
        imageNote: "Map or dashboard showing multiple asset locations across a site or city",
      },
      {
        title: "Theft Detection & Tamper Alerts",
        body: "The moment an asset is moved outside an authorised zone or tampered with, an instant alert is triggered. Protect your high-value equipment and inventory from unauthorised use, theft, or misplacement.",
        bulletPoints: [
          "Instant alerts on unauthorised movement",
          "Tamper detection on hardware devices",
          "Geofence-based zone monitoring per asset",
          "After-hours movement notifications",
        ],
        imageIcon: "🚨",
        imageLabel: "Theft or Tamper Alert",
        imageNote: "Alert notification on screen or app showing an asset moved outside a zone",
      },
      {
        title: "Usage Analytics & Reporting",
        body: "Understand how your assets are being used. Track utilisation rates, idle time, and maintenance needs to make smarter decisions about deployment, procurement, and operational efficiency.",
        bulletPoints: [
          "Asset utilisation and idle time reports",
          "Maintenance and service interval tracking",
          "Export reports as PDF or CSV",
          "Historical data for audits and compliance",
        ],
        imageIcon: "📊",
        imageLabel: "Asset Usage Analytics",
        imageNote: "Dashboard showing utilisation charts, idle time, or asset condition data",
      },
    ],
    moreCapabilities: [
      { icon: "🏷️", title: "Asset Tagging & Registry", description: "Every asset is tagged and registered in the system with full details — type, location, status, and ownership." },
      { icon: "🔋", title: "Long Battery Life Trackers", description: "Our tracking devices are built for long-term deployment with battery life suited to your asset type and environment." },
      { icon: "📡", title: "Works Across Environments", description: "Designed to function reliably in warehouses, construction sites, remote locations, and across supply chains." },
      { icon: "🔔", title: "Custom Alert Rules", description: "Set alerts for movement, zone entry/exit, low battery, or inactivity — tailored to each asset type." },
      { icon: "📱", title: "Mobile & Web Dashboard", description: "Access your full asset inventory and live map from any browser or mobile device, anytime." },
      { icon: "🔗", title: "API & System Integration", description: "Connect asset tracking data with your existing ERP, inventory, or operations management systems." },
    ],
    designedAround: {
      intro: "Asset tracking isn't the same across industries. A logistics company tracking shipping containers has completely different needs from a hospital managing medical equipment or a construction firm monitoring heavy machinery. Imprimis designs and customises the solution for your specific assets, environment, and workflows.",
      cards: [
        { icon: "🏷️", title: "Right Tracker for Every Asset", description: "We select the appropriate tracking hardware — GPS, BLE, RFID, or IoT sensors — based on the size, mobility, and environment of each asset type." },
        { icon: "🗺️", title: "Custom Zone & Alert Setup", description: "We map out your facilities, define authorised zones, and configure alert rules around how your assets are supposed to move and be used." },
        { icon: "📊", title: "Tailored Reports & Dashboards", description: "Your dashboard and reports are configured to surface the data that matters most to your operations team — not a generic view." },
        { icon: "⚙️", title: "Scalable from Day One", description: "Start with a handful of critical assets and scale to your entire inventory. The platform is built to grow with your operations without disruption." },
      ],
    },
    cta: {
      heading: "Ready to get started with Asset Tracking?",
      body: "Talk to our team to see how Imprimis can help you design a real-time asset tracking solution tailored to your business.",
    },
  },

  // 3. SMART WATER MANAGEMENT
  {
    slug: "smart-water-management",
    title: "Smart Water Management",
    icon: Droplets,
    short: "IoT-powered monitoring and control of water supply, quality, and distribution networks.",
    description:
      "Imprimis Smart Water Management brings real-time intelligence to water supply networks — giving municipalities, utilities, and industrial operators complete visibility over water quality, flow, pressure, and distribution from a single connected platform. Every sensor, valve, and meter in your network feeds live data into a centralised dashboard, so your team can monitor, respond, and take action instantly — from anywhere.",
    images: ["/hero/track1.png"],
    heroImageAlt: "Water treatment plant, pipeline network, or smart city water infrastructure with IoT overlay",
    features: [
      "Water quality monitoring",
      "Supply quantity & flow monitoring",
      "Remote valve control",
      "Leak detection & loss prevention",
      "Compliance reporting",
      "SCADA & system integration",
    ],
    whatItDoes: [
      {
        title: "Water Quality Monitoring",
        body: "Continuously monitor key water quality parameters across your distribution network in real time. IoT sensors detect changes the moment they occur, enabling rapid response before quality issues reach end users.",
        bulletPoints: [
          "Real-time monitoring of pH, turbidity, chlorine, and TDS levels",
          "Automated alerts when parameters exceed safe thresholds",
          "Multi-point monitoring across the distribution network",
          "Historical data logs for compliance and reporting",
        ],
        imageIcon: "🧪",
        imageLabel: "Water Quality Monitoring",
        imageNote: "Sensor or lab-style equipment measuring water quality parameters in a pipe or tank",
      },
      {
        title: "Supply Quantity & Flow Monitoring",
        body: "Track water flow rates, pressure levels, and supply volumes across every zone in your network. Identify imbalances, monitor consumption patterns, and ensure equitable distribution across all areas.",
        bulletPoints: [
          "Live flow rate and pressure readings at key network points",
          "Zone-level supply monitoring and consumption tracking",
          "Alerts for abnormal pressure drops or surges",
          "Daily, weekly, and monthly supply reports",
        ],
        imageIcon: "📊",
        imageLabel: "Flow & Supply Dashboard",
        imageNote: "Dashboard or screen showing live water flow rates, pressure readings, and supply levels across zones",
      },
      {
        title: "Remote Valve Control via Application",
        body: "Operate valves and control water flow across your network directly from the dashboard or mobile app — without needing field personnel on site. Schedule supply windows, respond to emergencies, and manage distribution zones with a single command.",
        bulletPoints: [
          "Remote open/close control of motorised valves",
          "Scheduled supply windows per zone or area",
          "Emergency shutoff with one tap from the app",
          "Command history and audit log for all valve operations",
        ],
        imageIcon: "🔧",
        imageLabel: "Remote Valve Control",
        imageNote: "App or web interface showing valve controls with open/close commands on a network map",
      },
      {
        title: "Leak Detection & Loss Prevention",
        body: "Detect unusual flow patterns and pressure anomalies that indicate leaks or pipe bursts — often before they become visible on the ground. Reduce non-revenue water loss and respond to issues faster than traditional methods allow.",
        bulletPoints: [
          "Continuous flow analysis for leak signature detection",
          "Pinpoint location of suspected leak zones on the network map",
          "Instant alerts to operations teams on detection",
          "Reduction in non-revenue water loss over time",
        ],
        imageIcon: "🔍",
        imageLabel: "Leak Detection Alert",
        imageNote: "Map or dashboard highlighting a detected leak point on the pipeline network",
      },
    ],
    moreCapabilities: [
      { icon: "🖥️", title: "Centralised Dashboard", description: "All network data — quality, flow, pressure, valve status — visible in one live operations dashboard accessible from web and mobile." },
      { icon: "🔔", title: "Automated Alerts", description: "Instant notifications via SMS, email, or app when quality thresholds are breached, pressure drops, or unusual activity is detected." },
      { icon: "📈", title: "Consumption Analytics", description: "Understand usage patterns across zones and time periods. Plan supply schedules and infrastructure upgrades with real data." },
      { icon: "🗂️", title: "Compliance Reporting", description: "Auto-generated reports on water quality and supply metrics — ready for regulatory submissions and internal audits." },
      { icon: "⚡", title: "Energy Usage Monitoring", description: "Track pump energy consumption alongside water flow data to identify inefficiencies and reduce operational costs." },
      { icon: "🔗", title: "SCADA & System Integration", description: "Integrate with existing SCADA systems or ERP platforms to unify your water network data with broader operational management." },
    ],
    designedAround: {
      intro: "Every water network is different — in scale, infrastructure, and the problems it faces. Whether you're managing a city's distribution grid or a single industrial facility, Imprimis designs the solution around your specific network, sensors, control points, and operational workflows.",
      cards: [
        { icon: "🌐", title: "Network Mapping & Sensor Placement", description: "We map your water network and identify the optimal points for quality, flow, and pressure sensors to give you complete coverage without redundancy." },
        { icon: "🖥️", title: "Custom Operations Dashboard", description: "Your dashboard is built around your network layout and team workflows — showing the right data to the right people at the right time." },
        { icon: "🔧", title: "Valve & Control Integration", description: "We integrate with your existing valve infrastructure or supply and configure new motorised valves, enabling full remote control from the platform." },
        { icon: "📋", title: "Regulatory & Compliance Configuration", description: "Alert thresholds, reporting formats, and data retention are configured to align with local regulations and your organisation's compliance requirements." },
      ],
    },
    cta: {
      heading: "Ready to get started with Smart Water Management?",
      body: "Talk to our team to see how Imprimis can help you build a smarter, more efficient water management system for your network.",
    },
  },

  // 4. PERSONAL SECURITY
  {
    slug: "personal-security",
    title: "Personal Security",
    icon: Shield,
    short: "GPS-based personal safety solutions for individuals, field teams, and lone workers.",
    description:
      "Imprimis Personal Security gives individuals, field teams, and organisations a reliable way to stay connected and protected — wherever they are. Built on IoT and real-time GPS, the solution combines live location tracking, instant SOS alerts, and emergency response tools into a single, easy-to-use platform.",
    images: ["/hero/ps1.png"],
    heroImageAlt: "Person holding a phone with SOS / safety tracking interface — or a wearable safety device",
    features: [
      "Real-time location tracking",
      "One-tap SOS & panic alerts",
      "Safe zones & boundary alerts",
      "Emergency contact alerts",
      "Wearable device support",
      "Incident logs & reports",
    ],
    whatItDoes: [
      {
        title: "Real-Time Location Tracking",
        body: "Know exactly where your people are at all times. Live GPS tracking works across urban areas and remote locations, giving supervisors and families an always-on view of a person's whereabouts.",
        bulletPoints: [
          "Continuous live location updates on a map",
          "Location history and movement timeline",
          "Works on mobile devices and dedicated wearables",
          "Accurate positioning in both urban and low-signal environments",
        ],
        imageIcon: "📍",
        imageLabel: "Live Location Tracking",
        imageNote: "Phone or wearable showing live GPS location on a map",
      },
      {
        title: "One-Tap SOS & Panic Alerts",
        body: "In an emergency, every second matters. A single tap on the SOS button instantly notifies designated contacts or supervisors with the person's exact location — triggering an immediate response.",
        bulletPoints: [
          "Instant SOS alert with live GPS coordinates",
          "Notifies multiple contacts simultaneously",
          "Available via app and dedicated panic button devices",
          "Alert acknowledgement and response tracking",
        ],
        imageIcon: "🆘",
        imageLabel: "SOS Alert Interface",
        imageNote: "Close-up of SOS button on app or wearable device being triggered",
      },
      {
        title: "Safe Zones & Boundary Alerts",
        body: "Define safe areas for individuals or teams. The moment someone enters or exits a designated zone, an automatic alert is triggered — helping supervisors and families stay informed without constant manual checking.",
        bulletPoints: [
          "Custom safe zones and restricted area boundaries",
          "Instant entry and exit alerts",
          "Ideal for lone workers, children, and elderly individuals",
          "Multiple zones per person or group",
        ],
        imageIcon: "🔒",
        imageLabel: "Safe Zone / Geofence Setup",
        imageNote: "App screen showing safe zone boundaries or an alert notification",
      },
    ],
    moreCapabilities: [
      { icon: "📞", title: "Emergency Contact Alerts", description: "Notify pre-set contacts instantly during an SOS event, with location details sent automatically." },
      { icon: "⌚", title: "Wearable Device Support", description: "Compatible with dedicated personal safety wearables — discreet, lightweight, and always on." },
      { icon: "🔋", title: "Low Battery Alerts", description: "Get notified when a device is running low on battery so safety coverage is never interrupted." },
      { icon: "📡", title: "Offline & Low Signal Mode", description: "Designed to function reliably even in areas with limited network coverage across India." },
      { icon: "📱", title: "Mobile App Dashboard", description: "Supervisors and family members can monitor locations and alerts from iOS or Android devices." },
      { icon: "📋", title: "Incident Logs & Reports", description: "Full history of SOS events, location trails, and alerts — accessible for review and compliance." },
    ],
    designedAround: {
      intro: "Personal safety needs vary widely — a construction company protecting lone workers has very different requirements from a school managing student safety or a family keeping track of an elderly parent. Imprimis designs and customises the Personal Security solution around your specific situation.",
      cards: [
        { icon: "⚙️", title: "Custom Alert Configuration", description: "We configure SOS triggers, safe zone boundaries, escalation contacts, and notification rules to match your exact operational needs." },
        { icon: "📟", title: "Right Hardware for Your Use Case", description: "From mobile app-based tracking to dedicated wearable panic buttons, we select and set up the hardware that best suits your users." },
        { icon: "👥", title: "Individual & Group Solutions", description: "Whether you need to protect a single individual or manage the safety of an entire workforce, the platform scales to your requirements." },
        { icon: "🔗", title: "Integration with Existing Systems", description: "Need to connect safety alerts with your internal operations or HR systems? We can integrate the platform to work alongside what you already have." },
      ],
    },
    cta: {
      heading: "Ready to get started with Personal Security?",
      body: "Talk to our team to see how Imprimis can help you design a personal safety solution tailored to your people and operations.",
    },
  },

  // 5. AUTOMATED SMART AGRICULTURE
  {
    slug: "automated-smart-agriculture",
    title: "Automated Smart Agriculture",
    icon: Leaf,
    short: "IoT-powered monitoring and automation for smarter, more efficient farming operations.",
    description:
      "Imprimis Automated Smart Agriculture gives farmers and agribusinesses real-time visibility and automated control over their fields, crops, and resources — all from a single connected platform. IoT sensors deployed across your land continuously monitor soil conditions, crop health, weather, and water availability, feeding live data into a dashboard that helps you make faster, more informed decisions.",
    images: ["/hero/agriculture1.png"],
    heroImageAlt: "Aerial view of farmland or crop fields with IoT sensor/data overlay visuals",
    features: [
      "Soil health monitoring",
      "Automated irrigation control",
      "Weather & microclimate monitoring",
      "Centralised farm dashboard",
      "Pest & disease alerts",
      "Solar-powered sensors",
    ],
    whatItDoes: [
      {
        title: "Soil Health Monitoring",
        body: "Deploy sensors across your fields to continuously monitor soil conditions in real time. Understand exactly what your soil needs — and when — so you can make precise decisions on irrigation, fertilisation, and crop management.",
        bulletPoints: [
          "Real-time soil moisture, temperature, and pH monitoring",
          "Nutrient level tracking across multiple field zones",
          "Alerts when soil conditions fall outside optimal ranges",
          "Historical soil data to track seasonal trends",
        ],
        imageIcon: "🌱",
        imageLabel: "Soil Monitoring Sensors",
        imageNote: "IoT soil sensor installed in a field or close-up of probe in soil with data reading",
      },
      {
        title: "Automated Irrigation Control",
        body: "Eliminate guesswork and manual scheduling from irrigation. The system monitors soil moisture levels and weather data, then automatically triggers irrigation when and where it's needed — saving water and reducing labour.",
        bulletPoints: [
          "Soil moisture-based automated irrigation triggers",
          "Zone-by-zone control for different crop areas",
          "Remote control and scheduling via mobile app",
          "Water usage tracking and wastage reduction reporting",
        ],
        imageIcon: "💧",
        imageLabel: "Automated Irrigation System",
        imageNote: "Irrigation system in a field with an app or control panel showing automation controls",
      },
      {
        title: "Weather & Microclimate Monitoring",
        body: "Install on-farm weather stations to capture the conditions specific to your land — not generic regional forecasts. Use real localised data on temperature, humidity, rainfall, and wind to plan operations accurately.",
        bulletPoints: [
          "On-farm temperature, humidity, and rainfall tracking",
          "Wind speed and solar radiation monitoring",
          "Frost and heat stress early warning alerts",
          "Microclimate data integrated with crop and soil dashboards",
        ],
        imageIcon: "🌤️",
        imageLabel: "Weather & Microclimate Station",
        imageNote: "On-farm weather station with sensors, or a dashboard showing live weather and crop data",
      },
      {
        title: "Centralised Farm Dashboard",
        body: "All data from across your farm — soil sensors, weather stations, irrigation systems, and crop monitors — feeds into one clear, easy-to-use dashboard. Access it from your desktop or mobile from anywhere, at any time.",
        bulletPoints: [
          "Live overview of all field zones and sensor readings",
          "Field map view with per-zone status indicators",
          "Custom alerts and notification rules",
          "Historical reports for planning and season review",
        ],
        imageIcon: "📊",
        imageLabel: "Crop & Farm Dashboard",
        imageNote: "Web or mobile dashboard showing crop health indicators, field map, and live sensor readings",
      },
    ],
    moreCapabilities: [
      { icon: "🐛", title: "Pest & Disease Alerts", description: "Environmental conditions that favour pest activity or disease spread are flagged early — giving you time to act before damage occurs." },
      { icon: "⚗️", title: "Fertiliser Optimisation", description: "Soil nutrient data helps you apply the right fertiliser at the right time — reducing input costs and avoiding over-application." },
      { icon: "🚜", title: "Farm Equipment Monitoring", description: "Track the location and usage of tractors and farm machinery across your land. Know what's active, idle, or needs servicing." },
      { icon: "📱", title: "Mobile App Control", description: "Monitor your entire farm and control irrigation or other automated systems from your smartphone — even when you're off-site." },
      { icon: "📈", title: "Yield & Season Reports", description: "End-of-season reports combine soil, weather, and irrigation data to give you a full picture of what drove this season's results." },
      { icon: "🔋", title: "Solar-Powered Sensors", description: "Field sensors can be solar powered for remote deployment with no wiring or battery replacement needed — ideal for large or off-grid farms." },
    ],
    designedAround: {
      intro: "No two farms are the same — crop type, land size, water source, soil variety, and local climate all affect what an effective solution looks like. Imprimis works directly with you to design and deploy an Automated Smart Agriculture system that fits your farm, your crops, and your way of working.",
      cards: [
        { icon: "🗺️", title: "Field Mapping & Sensor Planning", description: "We assess your land and crop layout to determine the optimal number and placement of sensors for complete, accurate coverage without unnecessary hardware." },
        { icon: "⚙️", title: "Custom Automation Rules", description: "Irrigation triggers, alert thresholds, and automation schedules are all configured around your specific crops, soil types, and farming practices." },
        { icon: "📊", title: "Tailored Dashboard & Reports", description: "Your dashboard is built to show the data that matters most to your operation — whether that's soil health, water usage, equipment status, or all three." },
        { icon: "📡", title: "Connectivity for Remote Locations", description: "We design connectivity solutions that work reliably in rural and remote areas — including low-power wide-area networks suited for large farms far from urban infrastructure." },
      ],
    },
    cta: {
      heading: "Ready to get started with Automated Smart Agriculture?",
      body: "Talk to our team to see how Imprimis can help you build a smarter, more efficient farming operation with IoT technology.",
    },
  },
];

export const serviceTranslations: {
  fr: Record<string, { title: string; short: string }>;
} = {
  fr: {
    "fleet-management": {
      title: "Gestion de Flotte",
      short: "Surveillez et gérez votre flotte de véhicules en temps réel.",
    },
    "asset-tracking": {
      title: "Suivi des Actifs",
      short: "Suivi et surveillance en temps réel de vos actifs de valeur.",
    },
    "smart-water-management": {
      title: "Gestion Intelligente de l'Eau",
      short: "Surveillance et analyses en temps réel pour les systèmes d'eau.",
    },
    "personal-security": {
      title: "Sécurité Personnelle",
      short: "Solutions de sécurité personnelle basées sur GPS.",
    },
    "automated-smart-agriculture": {
      title: "Agriculture Intelligente Automatisée",
      short: "Surveillance et automatisation IoT pour des opérations agricoles plus efficaces.",
    },
  },
};