import germanMessages from "ra-language-german";

export default {
  ...germanMessages,
  synapseadmin: {
    auth: {
      base_url: "Heimserver URL",
      welcome: "Willkommen bei Synapse-admin",
      server_version: "Synapse Version",
      username_error: "Bitte vollständigen Nutzernamen angeben: '@user:domain'",
      protocol_error: "Die URL muss mit 'http://' oder 'https://' beginnen",
      url_error: "Keine gültige Matrix Server URL",
    },
    action: {
      save_and_show: "Speichern und QR Code erzeugen",
      save_only: "Nur speichern",
      download_pdf: "PDF speichern",
    },
    users: {
      invalid_user_id:
        "Muss eine vollständige Matrix Benutzer-ID sein, z.B. @benutzer_id:homeserver",
    },
    rooms: {
      details: "Raumdetails",
      room_name: "Raumname",
      make_public: "Öffentlicher Raum",
      encrypt: "Verschlüsselter Raum",
      room_name_required: "Muss angegeben werden",
      alias_required_if_public: "Muss für öffentliche Räume angegeben werden.",
      alias: "Alias",
      alias_too_long:
        "Darf zusammen mit der Domain des Homeservers 255 bytes nicht überschreiten",
      tabs: {
        basic: "Allgemein",
        members: "Mitglieder",
        detail: "Details",
        permission: "Berechtigungen",
      },
    },
  },
  resources: {
    users: {
      backtolist: "Zurück zur Liste",
      name: "Benutzer",
      email: "E-Mail",
      msisdn: "Telefon",
      threepid: "E-Mail / Telefon",
      fields: {
        avatar: "Avatar",
        id: "Benutzer-ID",
        name: "Name",
        is_guest: "Gast",
        admin: "Admin",
        deactivated: "Deaktiviert",
        guests: "Zeige Gäste",
        show_deactivated: "Zeige deaktivierte Benutzer",
        user_id: "Suche Benutzer",
        displayname: "Anzeigename",
        password: "Passwort",
        avatar_url: "Avatar URL",
        avatar_src: "Avatar",
        medium: "Medium",
        threepids: "3PIDs",
        address: "Adresse",
        creation_ts_ms: "Zeitpunkt der Erstellung",
        consent_version: "Zugestimmte Geschäftsbedingungen",
      },
      helper: {
        deactivate: "Deaktivierte Nutzer können nicht wieder aktiviert werden.",
        erase: "DSGVO konformes Löschen der Benutzerdaten",
      },
      action: {
        erase: "Lösche Benutzerdaten",
      },
    },
    rooms: {
      name: "Raum |||| Räume",
      fields: {
        room_id: "Raum-ID",
        name: "Name",
        canonical_alias: "Alias",
        joined_members: "Mitglieder",
        joined_local_members: "Lokale Mitglieder",
        state_events: "Ereignisse",
        version: "Version",
        is_encrypted: "Verschlüsselt",
        encryption: "Verschlüsselungs-Algorithmus",
        federatable: "Fö­de­rierbar",
        invite_members: "Mitglieder einladen",
        invitees: "Einladungen",
        guest_access: "Gastzugang",
        join_rules: "Zugang zum Raum",
        members: "Mitglieder",
        public: "Öffentlich",
        creator: "Ersteller",
        join_rules: "Beitrittsregeln",
        guest_access: "Gastzugriff",
        history_visibility: "Historie-Sichtbarkeit",
      },
      enums: {
        join_rules: {
          public: "Öffentlich",
          knock: "Auf Anfrage",
          invite: "Nur auf Einladung",
          private: "Privat",
        },
        guest_access: {
          can_join: "Gäste können beitreten",
          forbidden: "Gäste können nicht beitreten",
        },
        history_visibility: {
          invited: "Ab Einladung",
          joined: "Ab Beitritt",
          shared: "Ab Setzen der Einstellung",
          world_readable: "Jeder",
        },
        unencrypted: "Nicht verschlüsselt",
      },
    },
    connections: {
      name: "Verbindungen",
      fields: {
        last_seen: "Datum",
        ip: "IP-Adresse",
        user_agent: "User Agent",
      },
    },
    servernotices: {
      name: "Serverbenachrichtigungen",
      send: "Servernachricht versenden",
      fields: {
        body: "Nachricht",
      },
      action: {
        send: "Sende Nachricht",
        send_success: "Nachricht erfolgreich versendet.",
        send_failure: "Beim Versenden ist ein Fehler aufgetreten.",
      },
      helper: {
        send:
          'Sendet eine Serverbenachrichtigung an die ausgewählten Nutzer. Hierfür muss das Feature "Server Notices" auf dem Server aktiviert sein.',
      },
    },
  },
  ra: {
    ...germanMessages.ra,
    auth: {
      ...germanMessages.ra.auth,
      auth_check_error: "Anmeldung fehlgeschlagen",
    },
    input: {
      ...germanMessages.ra.input,
      password: {
        ...germanMessages.ra.input.password,
        toggle_hidden: "Anzeigen",
        toggle_visible: "Verstecken",
      },
    },
    notification: {
      ...germanMessages.ra.notifiaction,
      logged_out: "Abgemeldet",
    },
  },
  ra: {
    ...germanMessages.ra,
    input: {
      ...germanMessages.ra.input,
      password: {
        ...germanMessages.ra.input.password,
        toggle_hidden: "Anzeigen",
        toggle_visible: "Verstecken",
      },
    },
  },
};
