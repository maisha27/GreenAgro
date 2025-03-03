type Language = 'bn' | 'en';

interface TranslationData {
  bengali: {
    nav: {
      home: string;
      dashboard: string;
      devices: string;
      sensors: string;
      settings: string;
      language: string;
      // Add these new properties for home screen cards
      homeCards: {
        dashboard: {
          title: string;
          description: string;
          voicePrompt: string;
        };
        devices: {
          title: string;
          description: string;
          voicePrompt: string;
        };
        sensors: {
          title: string;
          description: string;
          voicePrompt: string;
        };
        settings: {
          title: string;
          description: string;
          voicePrompt: string;
        };
      };
    };
    common: {
      user: string;
      dateTime: string;
      enabled: string;
      disabled: string;
      welcome: string; // Add this for welcome message
    };
    dashboard: {
      sections: {
        currentStatus: string;
        temperatureChart: string;
        alerts: string;
      };
      metrics: {
        temperature: {
          title: string;
          description: string;
        };
        humidity: {
          title: string;
          description: string;
        };
        light: {
          title: string;
          description: string;
        };
        soil: {
          title: string;
          description: string;
        };
      };
      trending: {
        up: string;
        down: string;
        stable: string;
      };
      timeLabels: string[];
      temperatureChart: {
        title: string;
        description: string;
      };
    };
    sensors: {
      [key: string]: {
        title: string;
        sensor: string;
        description: string;
      };
    };
    devices: {
      [key: string]: {
        title: string;
        description: string;
        category: string;
      };
    };
    controls: {
      on: string;
      off: string;
      auto: string;
    };
    settings: {
      sections: {
        system: string;
        data: string;
        account: string;
      };
      [key: string]: {
        title: string;
        description: string;
      } | {
        system: string;
        data: string;
        account: string;
      };
    };
  };
  english: {
    nav: {
      home: string;
      dashboard: string;
      devices: string;
      sensors: string;
      settings: string;
      language: string;
      // Add these new properties for home screen cards
      homeCards: {
        dashboard: {
          title: string;
          description: string;
          voicePrompt: string;
        };
        devices: {
          title: string;
          description: string;
          voicePrompt: string;
        };
        sensors: {
          title: string;
          description: string;
          voicePrompt: string;
        };
        settings: {
          title: string;
          description: string;
          voicePrompt: string;
        };
      };
    };
    common: {
      user: string;
      dateTime: string;
      enabled: string;
      disabled: string;
      welcome: string; // Add this for welcome message
    };
    dashboard: {
      sections: {
        currentStatus: string;
        temperatureChart: string;
        alerts: string;
      };
      metrics: {
        temperature: {
          title: string;
          description: string;
        };
        humidity: {
          title: string;
          description: string;
        };
        light: {
          title: string;
          description: string;
        };
        soil: {
          title: string;
          description: string;
        };
      };
      trending: {
        up: string;
        down: string;
        stable: string;
      };
      timeLabels: string[];
      temperatureChart: {
        title: string;
        description: string;
      };
    };
    sensors: {
      [key: string]: {
        title: string;
        sensor: string;
        description: string;
      };
    };
    devices: {
      [key: string]: {
        title: string;
        description: string;
        category: string;
      };
    };
    controls: {
      on: string;
      off: string;
      auto: string;
    };
    settings: {
      sections: {
        system: string;
        data: string;
        account: string;
      };
      [key: string]: {
        title: string;
        description: string;
      } | {
        system: string;
        data: string;
        account: string;
      };
    };
  };
}


export const translations: TranslationData = {
  bengali: {
    nav: {
      home: 'হোম',
      dashboard: 'ড্যাশবোর্ড',
      devices: 'ডিভাইস',
      sensors: 'সেন্সর',
      settings: 'সেটিংস',
      language: 'ভাষা',
      homeCards: {
        dashboard: {
          title: 'ড্যাশবোর্ড',
          description: 'সমস্ত তথ্য দেখুন',
          voicePrompt: 'ড্যাশবোর্ডে যান, যেখানে আপনি সমস্ত তথ্য দেখতে পারবেন'
        },
        devices: {
          title: 'ডিভাইস',
          description: 'ডিভাইস নিয়ন্ত্রণ করুন',
          voicePrompt: 'ডিভাইস নিয়ন্ত্রণে যান, যেখানে আপনি সব ডিভাইস নিয়ন্ত্রণ করতে পারবেন'
        },
        sensors: {
          title: 'সেন্সর',
          description: 'সেন্সর ডেটা দেখুন',
          voicePrompt: 'সেন্সর পেজে যান, যেখানে আপনি সমস্ত সেন্সরের ডেটা দেখতে পারবেন'
        },
        settings: {
          title: 'সেটিংস',
          description: 'অ্যাপ কনফিগার করুন',
          voicePrompt: 'সেটিংস পেজে যান, যেখানে আপনি অ্যাপ কনফিগার করতে পারবেন'
        }
      }
    },
    common: {
      user: 'ব্যবহারকারী',
      dateTime: 'তারিখ ও সময়',
      enabled: 'চালু করা হয়েছে',
      disabled: 'বন্ধ করা হয়েছে',
       welcome: 'স্বাগতম'
    },
    sensors: {
      lawnSprinkler: {
        title: 'লন স্প্রিংকলার সিস্টেম',
        sensor: 'পানির স্তর মনিটর সেন্সর',
        description: 'স্প্রিংকলার সিস্টেমে পানির স্তর পর্যবেক্ষণ ও নিয়ন্ত্রণ করে'
      },
      temperature: {
        title: 'তাপমাত্রা মনিটর সিস্টেম',
        sensor: 'তাপমাত্রা মনিটর সেন্সর',
        description: 'পরিবেশের তাপমাত্রা পর্যবেক্ষণ ও নিয়ন্ত্রণ করে'
      },
      humidity: {
        title: 'আর্দ্রতা মনিটর সিস্টেম',
        sensor: 'আর্দ্রতা মনিটর সেন্সর',
        description: 'পরিবেশের আর্দ্রতা পর্যবেক্ষণ ও নিয়ন্ত্রণ করে'
      },
      smoke: {
        title: 'স্মোক ডিটেক্টর সিস্টেম',
        sensor: 'স্মোক ডিটেক্টর সেন্সর',
        description: 'ধোঁয়া সনাক্তকরণ ও সতর্কতা প্রদান করে'
      },
      co2: {
        title: 'CO2 ডিটেক্টর সিস্টেম',
        sensor: 'কার্বন মনোক্সাইড ডিটেক্টর',
        description: 'কার্বন ডাই অক্সাইড এর মাত্রা পর্যবেক্ষণ করে'
      },
      light: {
        title: 'লাইট সিস্টেম',
        sensor: 'লাইট সেন্সর',
        description: 'আলোর তীব্রতা পর্যবেক্ষণ ও নিয়ন্ত্রণ করে'
      },
      door: {
        title: 'স্মার্ট ডোর সিস্টেম',
        sensor: 'মোশন ডিটেক্টর সেন্সর',
        description: 'দরজার অবস্থান ও গতিবিধি পর্যবেক্ষণ করে'
      },
      solar: {
        title: 'সোলার পাওয়ার সিস্টেম',
        sensor: 'পাওয়ার মিটার সেন্সর',
        description: 'সৌর শক্তি সংগ্রহ ও বিতরণ পর্যবেক্ষণ করে'
      }
    },
    devices: {
      // Temperature Devices
      thermostat: {
        title: 'থারমোস্ট্যাট',
        description: 'তাপমাত্রা নিয়ন্ত্রণ',
        category: 'তাপমাত্রা মনিটর সিস্টেম'
      },
      airCooler: {
        title: 'এয়ার কুলার',
        description: 'শীতলীকরণ নিয়ন্ত্রণ',
        category: 'তাপমাত্রা মনিটর সিস্টেম'
      },
      heater: {
        title: 'হিটার',
        description: 'উষ্ণতা নিয়ন্ত্রণ',
        category: 'তাপমাত্রা মনিটর সিস্টেম'
      },

      // Lawn Devices
      lawnSprinkler: {
        title: 'লন স্প্রিংকলার',
        description: 'স্বয়ংক্রিয় পানি দেওয়ার ব্যবস্থা',
        category: 'লন স্প্রিংকলার সিস্টেম'
      },

      // Humidity Devices
      humidifier: {
        title: 'হিউমিডিফায়ার',
        description: 'আর্দ্রতা নিয়ন্ত্রণ',
        category: 'আর্দ্রতা মনিটর সিস্টেম'
      },

      // Smoke Detection Devices
      fireSpinkler: {
        title: 'ফায়ার স্প্রিংকলার',
        description: 'আগুন নিয়ন্ত্রণ',
        category: 'স্মোক ডিটেক্টর সিস্টেম'
      },
      siren: {
        title: 'সাইরেন',
        description: 'বিপদ সংকেত',
        category: 'স্মোক ডিটেক্টর সিস্টেম'
      },

      // CO2 Devices
      blowerFan: {
        title: 'ব্লোয়ার ফ্যান',
        description: 'বাতাস চলাচল নিয়ন্ত্রণ',
        category: 'CO2 ডিটেক্টর সিস্টেম'
      },

      // Light Devices
      smartLight: {
        title: 'স্মার্ট লাইট',
        description: 'আলো নিয়ন্ত্রণ',
        category: 'লাইট সিস্টেম'
      },

      // Door Devices
      doorLock: {
        title: 'ডোর লক',
        description: 'দরজা নিয়ন্ত্রণ',
        category: 'স্মার্ট ডোর সিস্টেম'
      },
      webcam: {
        title: 'ওয়েবক্যাম',
        description: 'ভিডিও নজরদারি',
        category: 'স্মার্ট ডোর সিস্টেম'
      },
      rfidReader: {
        title: 'আরএফআইডি রিডার',
        description: 'কার্ড স্ক্যানার',
        category: 'স্মার্ট ডোর সিস্টেম'
      },

      // Solar Devices
      solarPanel: {
        title: 'সোলার প্যানেল',
        description: 'সৌর শক্তি সংগ্রহ',
        category: 'সোলার পাওয়ার সিস্টেম'
      },
      battery: {
        title: 'ব্যাটারি',
        description: 'শক্তি সংরক্ষণ',
        category: 'সোলার পাওয়ার সিস্টেম'
      }
    },

    controls: {
      on: 'চালু',
      off: 'বন্ধ',
      auto: 'স্বয়ংক্রিয়'
    },
    settings: {
      sections: {
        system: 'সিস্টেম সেটিংস',
        data: 'ডেটা সেটিংস',
        account: 'অ্যাকাউন্ট'
      },
      notifications: {
        title: 'নোটিফিকেশন',
        description: 'গ্রীনহাউসের অবস্থা পরিবর্তনের বিজ্ঞপ্তি পান'
      },
      voiceGuide: {
        title: 'ভয়েস গাইড',
        description: 'ভয়েস নির্দেশনা চালু করুন'
      },
      updateInterval: {
        title: 'আপডেট ইন্টারভাল',
        description: 'সেন্সর ডেটা আপডেটের সময়কাল'
      },
      dataStorage: {
        title: 'ডেটা সংরক্ষণ',
        description: 'সেন্সর ডেটা সংরক্ষণের সময়সীমা'
      },
      profile: {
        title: 'প্রোফাইল',
        description: 'ব্যক্তিগত তথ্য পরিবর্তন করুন'
      },
      language: {
        title: 'ভাষা',
        description: 'অ্যাপের ভাষা পরিবর্তন করুন'
      }
    },
    dashboard: {
      sections: {
        currentStatus: 'বর্তমান অবস্থা',
        temperatureChart: '২৪ ঘণ্টার তাপমাত্রা',
        alerts: 'সতর্কতা'
      },
      metrics: {
        temperature: {
          title: 'তাপমাত্রা',
          description: 'বর্তমান তাপমাত্রা'
        },
        humidity: {
          title: 'আর্দ্রতা',
          description: 'বাতাসের আর্দ্রতা'
        },
        light: {
          title: 'আলোর তীব্রতা',
          description: 'পরিবেশের আলোর পরিমাণ'
        },
        soil: {
          title: 'মাটির আর্দ্রতা',
          description: 'মাটির আর্দ্রতার পরিমাণ'
        }
      },
      trending: {
        up: 'বৃদ্ধি পাচ্ছে',
        down: 'কমছে',
        stable: 'স্থিতিশীল'
      },
      timeLabels: ['সকাল', 'দুপুর', 'বিকাল', 'সন্ধ্যা', 'রাত', 'ভোর'],
      temperatureChart: {
        title: 'তাপমাত্রা',
        description: 'গত ২৪ ঘণ্টার তাপমাত্রার পরিবর্তন'
      }
  }
},
  english: {
    nav: {
      home: 'Home',
      dashboard: 'Dashboard',
      devices: 'Devices',
      sensors: 'Sensors',
      settings: 'Settings',
      language: 'Language',
      homeCards: {
        dashboard: {
          title: 'Dashboard',
          description: 'View all information',
          voicePrompt: 'Go to Dashboard where you can view all information'
        },
        devices: {
          title: 'Devices',
          description: 'Control your devices',
          voicePrompt: 'Go to Devices where you can control all devices'
        },
        sensors: {
          title: 'Sensors',
          description: 'View sensor data',
          voicePrompt: 'Go to Sensors where you can view all sensor data'
        },
        settings: {
          title: 'Settings',
          description: 'Configure app settings',
          voicePrompt: 'Go to Settings where you can configure the app'
        }
      }
    },
    common: {
      user: 'User',
      dateTime: 'Date & Time',
      enabled: 'চালু করা হয়েছে',
      disabled: 'বন্ধ করা হয়েছে',
      welcome: 'Welcome'
    },
    sensors: {
     lawnSprinkler: {
        title: 'Lawn Sprinkler System',
        sensor: 'Water Level Monitor Sensor',
        description: 'Monitors and controls water levels in the sprinkler system'
      },
      temperature: {
        title: 'Temperature Monitor System',
        sensor: 'Temperature Monitor Sensor',
        description: 'Monitors and controls environmental temperature'
      },
      humidity: {
        title: 'Humidity Monitor System',
        sensor: 'Humidity Monitor Sensor',
        description: 'Monitors and controls environmental humidity'
      },
      smoke: {
        title: 'Smoke Detector System',
        sensor: 'Smoke Detector Sensor',
        description: 'Detects smoke and provides alerts'
      },
      co2: {
        title: 'CO2 Detector System',
        sensor: 'Carbon Monoxide Detector',
        description: 'Monitors carbon dioxide levels'
      },
      light: {
        title: 'Light System',
        sensor: 'Light Sensor',
        description: 'Monitors and controls light intensity'
      },
      door: {
        title: 'Smart Door System',
        sensor: 'Motion Detector Sensor',
        description: 'Monitors door status and movement'
      },
      solar: {
        title: 'Solar Power System',
        sensor: 'Power Meter Sensor',
        description: 'Monitors solar power generation and distribution'
      }
    },
    devices: {
      // Temperature Devices
      thermostat: {
        title: 'Thermostat',
        description: 'Temperature Control',
        category: 'Temperature Monitor System'
      },
      airCooler: {
        title: 'Air Cooler',
        description: 'Cooling Control',
        category: 'Temperature Monitor System'
      },
      heater: {
        title: 'Heater',
        description: 'Heating Control',
        category: 'Temperature Monitor System'
      },

      // Lawn Devices
      lawnSprinkler: {
        title: 'Lawn Sprinkler',
        description: 'Automatic Water Sprinkling System',
        category: 'Lawn Sprinkler System'
      },

      // Humidity Devices
      humidifier: {
        title: 'Humidifier',
        description: 'Humidity Control',
        category: 'Humidity Monitor System'
      },

      // Smoke Detection Devices
      fireSpinkler: {
        title: 'Fire Sprinkler',
        description: 'Fire Control',
        category: 'Smoke Detector System'
      },
      siren: {
        title: 'Siren',
        description: 'Danger Alert',
        category: 'Smoke Detector System'
      },

      // CO2 Devices
      blowerFan: {
        title: 'Blower Fan',
        description: 'Air Circulation Control',
        category: 'CO2 Detector System'
      },

      // Light Devices
      smartLight: {
        title: 'Smart Light',
        description: 'Light Control',
        category: 'Light System'
      },

      // Door Devices
      doorLock: {
        title: 'Door Lock',
        description: 'Door Control',
        category: 'Smart Door System'
      },
      webcam: {
        title: 'Webcam',
        description: 'Video Surveillance',
        category: 'Smart Door System'
      },
      rfidReader: {
        title: 'RFID Reader',
        description: 'Card Scanner',
        category: 'Smart Door System'
      },

      // Solar Devices
      solarPanel: {
        title: 'Solar Panel',
        description: 'Solar Power Collection',
        category: 'Solar Power System'
      },
      battery: {
        title: 'Battery',
        description: 'Power Storage',
        category: 'Solar Power System'
      }
    },
    controls: {
      on: 'On',
      off: 'Off',
      auto: 'Auto'
    },
    settings: {
      sections: {
        system: 'System Settings',
        data: 'Data Settings',
        account: 'Account'
      },
      notifications: {
        title: 'Notifications',
        description: 'Get alerts about greenhouse status changes'
      },
      voiceGuide: {
        title: 'Voice Guide',
        description: 'Enable voice instructions'
      },
      updateInterval: {
        title: 'Update Interval',
        description: 'Set sensor data update frequency'
      },
      dataStorage: {
        title: 'Data Storage',
        description: 'Set sensor data storage duration'
      },
      profile: {
        title: 'Profile',
        description: 'Change personal information'
      },
      language: {
        title: 'Language',
        description: 'Change app language'
      }
    },
    dashboard: {
      sections: {
        currentStatus: 'Current Status',
        temperatureChart: '24 Hour Temperature',
        alerts: 'Alerts'
      },
      metrics: {
        temperature: {
          title: 'Temperature',
          description: 'Current temperature'
        },
        humidity: {
          title: 'Humidity',
          description: 'Air humidity'
        },
        light: {
          title: 'Light Intensity',
          description: 'Environmental light level'
        },
        soil: {
          title: 'Soil Moisture',
          description: 'Soil moisture level'
        }
      },
      trending: {
        up: 'increasing',
        down: 'decreasing',
        stable: 'stable'
      },
      timeLabels: ['Morning', 'Noon', 'Afternoon', 'Evening', 'Night', 'Dawn'],
      temperatureChart: {
        title: 'Temperature Chart',
        description: 'Temperature variation over the last 24 hours'
      }
    }
  }
};