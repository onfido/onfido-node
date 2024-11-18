import {
  Applicant,
  Check,
  Document,
  DocumentReport,
  FacialSimilarityPhotoReport,
  Task,
  WatchlistMonitor,
  Webhook,
  WorkflowRun
} from "onfido-node";

export const exampleApplicant: Applicant = {
  id: "123-abc",
  created_at: "2020-01-01T00:00:00Z",
  delete_at: null,
  href: "/v3.6/applicants/123-abc",
  first_name: "Test",
  last_name: "Applicant",
  email: "first.last@gmail.com",
  dob: null,
  id_numbers: [],
  address: {
    postcode: "AB12 3AB",
    country: "GBR",
    flat_number: null,
    building_number: null,
    building_name: null,
    street: null,
    sub_street: null,
    town: null,
    state: null,
    line1: null,
    line2: null,
    line3: null
  },
  phone_number: "351911111111",
  location: {
    ip_address: "127.0.0.1",
    country_of_residence: "GBR"
  }
};

export const exampleCheck: Check = {
  id: "abc-123",
  report_ids: ["report-1", "report-2"],
  created_at: "2020-01-01T00:00:00Z",
  href: "https://api.onfido.com/v3.6/checks/123-abc",
  applicant_id: "applicant-123",
  applicant_provides_data: false,
  sandbox: false,
  status: "in_progress",
  tags: [],
  result: null,
  form_uri: null,
  redirect_uri: null,
  results_uri: "https://dashboard.onfido.com/checks/123-abc",
  // privacy_notices_read_consent_given: true,
  webhook_ids: ["webhook-123"]
};

export const exampleDocument: Document = {
  id: "123-abc",
  applicant_id: "applicant-123",
  created_at: "2020-01-01T00:00:00Z",
  href: "https://api.onfido.com/v3.6/documents/123-abc",
  download_href: "https://api.onfido.com/v3.6/documents/123-abc/download",
  file_name: "sample_driving_licence.png",
  file_type: "png",
  file_size: 361_771,
  type: "driving_licence",
  side: null,
  issuing_country: null
};

export const exampleWebhook: Webhook = {
  id: "abc-123",
  url: "https://example.com",
  enabled: true,
  events: ["check.completed", "report.completed"],
  token: "webhook-token",
  href: "/v3/webhooks/abc-132",
  environments: ["sandbox"],
  payload_version: 3
};

export const exampleWorkflowRun: WorkflowRun = {
  id: "abc-123",
  applicant_id: "abc-123",
  workflow_id: "abc-123",
  workflow_version_id: 1,
  dashboard_url: "https://dashboard.onfido.com/results/uuid",
  status: "awaiting_input",
  output: null,
  reasons: null,
  error: null,
  link: null,
  created_at: "2022-06-28T15:39:42Z",
  updated_at: "2022-06-28T15:39:42Z",
  tags: []
};

export const exampleWorkflowRunOutputProfileDataCapture: object = {
  address: {
    country: "POL",
    line1: "770 Leatha Corners",
    line2: "Reichel Mall",
    line3: "Sherwood Drives",
    postcode: "38074",
    town: "Keeblerview"
  },
  country_residence: "TTO",
  dob: "1976-08-31",
  email: "Toni14@yahoo.com",
  first_name: "Lyric",
  last_name: "Kihn",
  nationality: "SWZ",
  phone_number: "+351930983797",
  phone_number_consent_granted: true
};

export const exampleWorkflowRunOutputDocumentReport: object = {
  breakdown: {
    age_validation: {
      breakdown: {
        minimum_accepted_age: {
          properties: {},
          result: "clear"
        }
      },
      result: "clear"
    },
    compromised_document: {
      breakdown: {
        document_database: {
          properties: {},
          result: "clear"
        },
        repeat_attempts: {
          properties: {},
          result: "clear"
        }
      },
      result: "clear"
    },
    data_comparison: {
      breakdown: {
        date_of_birth: {
          properties: {},
          result: "clear"
        },
        date_of_expiry: {
          properties: {},
          result: "clear"
        },
        document_numbers: {
          properties: {},
          result: "clear"
        },
        document_type: {
          properties: {},
          result: "clear"
        },
        first_name: {
          properties: {},
          result: "clear"
        },
        gender: {
          properties: {},
          result: "clear"
        },
        issuing_country: {
          properties: {},
          result: "clear"
        },
        last_name: {
          properties: {},
          result: "clear"
        }
      },
      result: "clear"
    },
    data_consistency: {
      breakdown: {
        date_of_birth: {
          properties: {},
          result: "clear"
        },
        date_of_expiry: {
          properties: {},
          result: "clear"
        },
        document_numbers: {
          properties: {},
          result: "clear"
        },
        document_type: {
          properties: {},
          result: "clear"
        },
        first_name: {
          properties: {},
          result: "clear"
        },
        gender: {
          properties: {},
          result: "clear"
        },
        issuing_country: {
          properties: {},
          result: "clear"
        },
        last_name: {
          properties: {},
          result: "clear"
        },
        multiple_data_sources_present: {
          properties: {},
          result: "clear"
        },
        nationality: {
          properties: {},
          result: "clear"
        }
      },
      result: "clear"
    },
    data_validation: {
      breakdown: {
        date_of_birth: {
          properties: {},
          result: "clear"
        },
        document_expiration: {
          properties: {},
          result: "clear"
        },
        document_numbers: {
          properties: {},
          result: "clear"
        },
        expiry_date: {
          properties: {},
          result: "clear"
        },
        gender: {
          properties: {},
          result: "clear"
        },
        mrz: {
          properties: {},
          result: "clear"
        }
      },
      result: "clear"
    },
    image_integrity: {
      breakdown: {
        colour_picture: {
          properties: {},
          result: "clear"
        },
        conclusive_document_quality: {
          properties: {},
          result: "clear"
        },
        image_quality: {
          properties: {},
          result: "clear"
        },
        supported_document: {
          properties: {},
          result: "clear"
        }
      },
      result: "clear"
    },
    police_record: {
      breakdown: {
        "document_has_not_been_recorded_as_lost,_stolen_or_compromised": {
          properties: {},
          result: "clear"
        }
      },
      result: "clear"
    },
    visual_authenticity: {
      breakdown: {
        digital_tampering: {
          properties: {},
          result: "clear"
        },
        face_detection: {
          properties: {},
          result: "clear"
        },
        fonts: {
          properties: {},
          result: "clear"
        },
        original_document_present: {
          properties: {},
          result: "clear"
        },
        other: {
          properties: {},
          result: "clear"
        },
        picture_face_integrity: {
          properties: {},
          result: "clear"
        },
        security_features: {
          properties: {},
          result: "clear"
        },
        template: {
          properties: {},
          result: "clear"
        }
      },
      result: "clear"
    }
  },
  properties: {
    date_of_birth: "1990-01-01",
    date_of_expiry: "2031-05-28",
    document_number: "999999999",
    document_numbers: [
      {
        type: "document_number",
        value: "999999999"
      }
    ],
    document_type: "passport",
    first_name: "Broderick",
    issuing_country: "GBR",
    last_name: "Altenwerth"
  },
  repeat_attempts: {
    attempts_clear_rate: 0,
    attempts_count: 1,
    repeat_attempts: [],
    report_id: "00000000-0000-0000-0000-000000000000",
    unique_mismatches_count: 0
  },
  result: "clear",
  status: "complete",
  sub_result: "clear",
  uuid: "9d2d7ca9-73c6-4dc8-9185-7bcc62f8a1c5"
};

export const exampleWorkflowRunOutputFacialSimilarityReport: object = {
  breakdown: {
    face_comparison: {
      breakdown: {
        face_match: {
          properties: {
            document_id: "0925205f-1af3-4874-8d14-f2d2a81fb75d",
            score: 0.6512
          },
          result: "clear"
        }
      },
      result: "clear"
    },
    image_integrity: {
      breakdown: {
        face_detected: {
          properties: {},
          result: "clear"
        },
        source_integrity: {
          properties: {},
          result: "clear"
        }
      },
      result: "clear"
    },
    visual_authenticity: {
      breakdown: {
        spoofing_detection: {
          properties: {
            score: 0.9512
          },
          result: "clear"
        }
      },
      result: "clear"
    }
  },
  properties: {},
  result: "clear",
  status: "complete",
  sub_result: null,
  uuid: "9cb47ea9-bc41-4e98-8005-51de3d8174b7"
};

export const exampleTask: Task = {
  id: "abc-123",
  task_def_id: "task_123",
  created_at: "2022-06-28T15:39:42Z",
  updated_at: "2022-07-28T15:40:42Z"
};

export const exampleDocumentReport: DocumentReport = {
  check_id: "adc09d31-857c-442a-ac37-5702ce6aa2da",
  created_at: "2024-04-26T11:27:05Z",
  documents: [
    {
      id: "dcfa6ae8-4e37-4717-a72b-b6510d24396e"
    }
  ],
  href: "/v3.6/reports/ebc7a6b9-d8b2-4ceb-8940-9c8cd70f2b51",
  id: "ebc7a6b9-d8b2-4ceb-8940-9c8cd70f2b51",
  name: "document",
  properties: {
    date_of_birth: "1990-01-01",
    date_of_expiry: "2031-05-28",
    document_numbers: [
      {
        type: "document_number",
        value: "999999999"
      }
    ],
    document_type: "passport",
    first_name: "laboris nulla",
    gender: null,
    issuing_country: "GBR",
    last_name: "elit",
    nationality: null
  },
  result: "clear",
  status: "complete",
  sub_result: "clear",
  breakdown: {
    data_validation: {
      result: "clear",
      breakdown: {
        gender: {
          result: "clear",
          properties: {}
        },
        date_of_birth: {
          result: "clear",
          properties: {}
        },
        document_numbers: {
          result: "clear",
          properties: {}
        },
        document_expiration: {
          result: "clear",
          properties: {}
        },
        expiry_date: {
          result: "clear",
          properties: {}
        },
        mrz: {
          result: "clear",
          properties: {}
        }
      }
    },
    visual_authenticity: {
      result: "clear",
      breakdown: {
        fonts: {
          result: "clear",
          properties: {}
        },
        picture_face_integrity: {
          result: "clear",
          properties: {}
        },
        template: {
          result: "clear",
          properties: {}
        },
        security_features: {
          result: "clear",
          properties: {}
        },
        original_document_present: {
          result: "clear",
          properties: {}
        },
        digital_tampering: {
          result: "clear",
          properties: {}
        },
        other: {
          result: "clear",
          properties: {}
        },
        face_detection: {
          result: "clear",
          properties: {}
        }
      }
    },
    compromised_document: {
      result: "clear",
      breakdown: {
        document_database: {
          result: "clear",
          properties: {}
        },
        repeat_attempts: {
          result: "clear",
          properties: {}
        }
      }
    },
    data_consistency: {
      result: "clear",
      breakdown: {
        date_of_expiry: {
          result: "clear",
          properties: {}
        },
        document_numbers: {
          result: "clear",
          properties: {}
        },
        issuing_country: {
          result: "clear",
          properties: {}
        },
        document_type: {
          result: "clear",
          properties: {}
        },
        date_of_birth: {
          result: "clear",
          properties: {}
        },
        gender: {
          result: "clear",
          properties: {}
        },
        multiple_data_sources_present: {
          result: "clear",
          properties: {}
        },
        first_name: {
          result: "clear",
          properties: {}
        },
        last_name: {
          result: "clear",
          properties: {}
        },
        nationality: {
          result: "clear",
          properties: {}
        }
      }
    },
    data_comparison: {
      result: "clear",
      breakdown: {
        issuing_country: {
          result: "clear",
          properties: {}
        },
        gender: {
          result: "clear",
          properties: {}
        },
        date_of_expiry: {
          result: "clear",
          properties: {}
        },
        last_name: {
          result: "clear",
          properties: {}
        },
        document_type: {
          result: "clear",
          properties: {}
        },
        document_numbers: {
          result: "clear",
          properties: {}
        },
        first_name: {
          result: "clear",
          properties: {}
        },
        date_of_birth: {
          result: "clear",
          properties: {}
        }
      }
    },
    image_integrity: {
      result: "clear",
      breakdown: {
        image_quality: {
          result: "clear",
          properties: {}
        },
        conclusive_document_quality: {
          result: "clear",
          properties: {}
        },
        supported_document: {
          result: "clear",
          properties: {}
        },
        colour_picture: {
          result: "clear",
          properties: {}
        }
      }
    },
    police_record: {
      result: "clear"
    },
    age_validation: {
      result: "clear",
      breakdown: {
        minimum_accepted_age: {
          result: "clear",
          properties: {}
        }
      }
    }
  }
};

export const exampleFacialSimilarityPhotoReport: FacialSimilarityPhotoReport = {
  check_id: "d63e8885-5c37-464d-b8c6-ca3b4c6813fd",
  created_at: "2024-04-30T13:31:43Z",
  documents: [
    {
      id: "83bab412-6253-4a2b-9a91-658a864e379f"
    }
  ],
  href: "/v3.6/reports/c39c01da-a6d4-4921-a3c5-72d78eb51236",
  id: "c39c01da-a6d4-4921-a3c5-72d78eb51236",
  name: "facial_similarity_photo_fully_auto",
  result: "clear",
  status: "complete",
  id_photos: [],
  live_photos: [],
  live_videos: [],
  motion_captures: [],
  sub_result: null,
  breakdown: {
    visual_authenticity: {
      result: "clear",
      breakdown: {
        spoofing_detection: {
          result: "clear",
          properties: {
            score: 0.9512
          }
        }
      }
    },
    image_integrity: {
      result: "clear",
      breakdown: {
        source_integrity: {
          result: "clear",
          properties: {}
        },
        face_detected: {
          result: "clear",
          properties: {}
        }
      }
    },
    face_comparison: {
      result: "clear",
      breakdown: {
        face_match: {
          result: "clear",
          properties: {
            score: 0.6512,
            document_id: "83bab412-6253-4a2b-9a91-658a864e379f"
          }
        }
      }
    }
  }
};

export const exampleWatchlistMonitor: WatchlistMonitor = {
  id: "abc-123",
  applicant_id: "abc-123",
  report_name: "watchlist_standard",
  deleted_at: null,
  tags: [],
  is_sandbox: true,
  created_at: "2022-06-28T15:39:42Z"
};
