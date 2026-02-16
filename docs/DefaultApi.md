# DefaultApi

All URIs are relative to *https://api.eu.onfido.com/v3.6*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**cancelReport**](#cancelreport) | **POST** /reports/{report_id}/cancel | Cancel report|
|[**completeTask**](#completetask) | **POST** /workflow_runs/{workflow_run_id}/tasks/{task_id}/complete | Complete Task|
|[**createApplicant**](#createapplicant) | **POST** /applicants | Create Applicant|
|[**createCheck**](#createcheck) | **POST** /checks | Create a check|
|[**createTimelineFile**](#createtimelinefile) | **POST** /workflow_runs/{workflow_run_id}/timeline_file | Create Timeline File for Workflow Run|
|[**createWatchlistMonitor**](#createwatchlistmonitor) | **POST** /watchlist_monitors | Create monitor|
|[**createWebhook**](#createwebhook) | **POST** /webhooks | Register webhook|
|[**createWorkflowRun**](#createworkflowrun) | **POST** /workflow_runs | Create a Workflow Run|
|[**deleteApplicant**](#deleteapplicant) | **DELETE** /applicants/{applicant_id} | Delete Applicant|
|[**deletePasskey**](#deletepasskey) | **DELETE** /passkeys/{username}/{passkey_id} | Delete passkey|
|[**deletePasskeys**](#deletepasskeys) | **DELETE** /passkeys/{username} | Delete passkeys|
|[**deleteWatchlistMonitor**](#deletewatchlistmonitor) | **DELETE** /watchlist_monitors/{monitor_id} | Delete monitor|
|[**deleteWebhook**](#deletewebhook) | **DELETE** /webhooks/{webhook_id} | Delete a webhook|
|[**downloadAesDocument**](#downloadaesdocument) | **GET** /advanced_electronic_signature/documents | Retrieves the signed document or signing transaction receipt|
|[**downloadCheck**](#downloadcheck) | **GET** /checks/{check_id}/download | Download check|
|[**downloadDocument**](#downloaddocument) | **GET** /documents/{document_id}/download | Download document|
|[**downloadDocumentVideo**](#downloaddocumentvideo) | **GET** /documents/{document_id}/video/download | Download document video|
|[**downloadEvidenceFolder**](#downloadevidencefolder) | **GET** /workflow_runs/{workflow_run_id}/evidence_folder | Retrieve Workflow Run Evidence Folder|
|[**downloadIdPhoto**](#downloadidphoto) | **GET** /id_photos/{id_photo_id}/download | Download ID photo|
|[**downloadLivePhoto**](#downloadlivephoto) | **GET** /live_photos/{live_photo_id}/download | Download live photo|
|[**downloadLiveVideo**](#downloadlivevideo) | **GET** /live_videos/{live_video_id}/download | Download live video|
|[**downloadLiveVideoFrame**](#downloadlivevideoframe) | **GET** /live_videos/{live_video_id}/frame | Download live video frame|
|[**downloadMotionCapture**](#downloadmotioncapture) | **GET** /motion_captures/{motion_capture_id}/download | Download motion capture|
|[**downloadMotionCaptureFrame**](#downloadmotioncaptureframe) | **GET** /motion_captures/{motion_capture_id}/frame | Download motion capture frame|
|[**downloadNfcFace**](#downloadnfcface) | **GET** /documents/{document_id}/nfc_face | Download NFC face|
|[**downloadQesDocument**](#downloadqesdocument) | **GET** /qualified_electronic_signature/documents | Retrieves the signed document or application form|
|[**downloadSesDocument**](#downloadsesdocument) | **GET** /simple_electronic_signature/documents | Retrieves the signed document or signing transaction receipt|
|[**downloadSignedEvidenceFile**](#downloadsignedevidencefile) | **GET** /workflow_runs/{workflow_run_id}/signed_evidence_file | Retrieve Workflow Run Evidence Summary File|
|[**downloadSigningDocument**](#downloadsigningdocument) | **GET** /signing_documents/{signing_document_id}/download | Download signing document|
|[**extract**](#extract) | **POST** /extractions | Autofill|
|[**findAddresses**](#findaddresses) | **GET** /addresses/pick | Address Picker|
|[**findApplicant**](#findapplicant) | **GET** /applicants/{applicant_id} | Retrieve Applicant|
|[**findApplicantConsents**](#findapplicantconsents) | **GET** /applicants/{applicant_id}/consents | Retrieve Applicant Consents|
|[**findCheck**](#findcheck) | **GET** /checks/{check_id} | Retrieve a Check|
|[**findDocument**](#finddocument) | **GET** /documents/{document_id} | Retrieve document|
|[**findIdPhoto**](#findidphoto) | **GET** /id_photos/{id_photo_id} | Retrieve ID photo|
|[**findLivePhoto**](#findlivephoto) | **GET** /live_photos/{live_photo_id} | Retrieve live photo|
|[**findLiveVideo**](#findlivevideo) | **GET** /live_videos/{live_video_id} | Retrieve live video|
|[**findMotionCapture**](#findmotioncapture) | **GET** /motion_captures/{motion_capture_id} | Retrieve motion capture|
|[**findPasskey**](#findpasskey) | **GET** /passkeys/{username}/{passkey_id} | Retrieve passkey|
|[**findReport**](#findreport) | **GET** /reports/{report_id} | Retrieve report|
|[**findSigningDocument**](#findsigningdocument) | **GET** /signing_documents/{signing_document_id} | Retrieve signing document|
|[**findTask**](#findtask) | **GET** /workflow_runs/{workflow_run_id}/tasks/{task_id} | Retrieve Task|
|[**findTimelineFile**](#findtimelinefile) | **GET** /workflow_runs/{workflow_run_id}/timeline_file/{timeline_file_id} | Retrieve Timeline File for Workflow Run|
|[**findWatchlistMonitor**](#findwatchlistmonitor) | **GET** /watchlist_monitors/{monitor_id} | Retrieve monitor|
|[**findWebhook**](#findwebhook) | **GET** /webhooks/{webhook_id} | Retrieve a Webhook|
|[**findWorkflowRun**](#findworkflowrun) | **GET** /workflow_runs/{workflow_run_id} | Retrieve Workflow Run|
|[**forceReportCreationFromWatchlistMonitor**](#forcereportcreationfromwatchlistmonitor) | **POST** /watchlist_monitors/{monitor_id}/new_report | Force new report creation (BETA)|
|[**generateSdkToken**](#generatesdktoken) | **POST** /sdk_token | Generate a SDK token|
|[**listApplicants**](#listapplicants) | **GET** /applicants | List Applicants|
|[**listChecks**](#listchecks) | **GET** /checks | Retrieve Checks|
|[**listDocuments**](#listdocuments) | **GET** /documents | List documents|
|[**listIdPhotos**](#listidphotos) | **GET** /id_photos | List ID photos|
|[**listLivePhotos**](#listlivephotos) | **GET** /live_photos | List live photos|
|[**listLiveVideos**](#listlivevideos) | **GET** /live_videos | List live videos|
|[**listMotionCaptures**](#listmotioncaptures) | **GET** /motion_captures | List motion captures|
|[**listPasskeys**](#listpasskeys) | **GET** /passkeys/{username} | List passkeys|
|[**listRepeatAttempts**](#listrepeatattempts) | **GET** /repeat_attempts/{report_id} | Retrieve repeat attempts|
|[**listReports**](#listreports) | **GET** /reports | List reports|
|[**listSigningDocuments**](#listsigningdocuments) | **GET** /signing_documents | List signing documents|
|[**listTasks**](#listtasks) | **GET** /workflow_runs/{workflow_run_id}/tasks | List Tasks|
|[**listWatchlistMonitorMatches**](#listwatchlistmonitormatches) | **GET** /watchlist_monitors/{monitor_id}/matches | List matches (BETA)|
|[**listWatchlistMonitors**](#listwatchlistmonitors) | **GET** /watchlist_monitors | List monitors|
|[**listWebhooks**](#listwebhooks) | **GET** /webhooks | List webhooks|
|[**listWorkflowRuns**](#listworkflowruns) | **GET** /workflow_runs | List Workflow Runs|
|[**ping**](#ping) | **GET** /ping | Ping|
|[**postResultsFeedback**](#postresultsfeedback) | **POST** /results_feedback | Fraud reporting (ALPHA)|
|[**resendWebhooks**](#resendwebhooks) | **POST** /webhooks/resend | Resends webhooks|
|[**restoreApplicant**](#restoreapplicant) | **POST** /applicants/{applicant_id}/restore | Restore Applicant|
|[**resumeCheck**](#resumecheck) | **POST** /checks/{check_id}/resume | Resume a Check|
|[**resumeReport**](#resumereport) | **POST** /reports/{report_id}/resume | Resume report|
|[**updateApplicant**](#updateapplicant) | **PUT** /applicants/{applicant_id} | Update Applicant|
|[**updatePasskey**](#updatepasskey) | **PUT** /passkeys/{username}/{passkey_id} | Update passkey|
|[**updateWatchlistMonitorMatch**](#updatewatchlistmonitormatch) | **PATCH** /watchlist_monitors/{monitor_id}/matches | Set match status (BETA)|
|[**updateWebhook**](#updatewebhook) | **PUT** /webhooks/{webhook_id} | Edit a webhook|
|[**uploadDocument**](#uploaddocument) | **POST** /documents | Upload a document|
|[**uploadIdPhoto**](#uploadidphoto) | **POST** /id_photos | Upload ID photo|
|[**uploadLivePhoto**](#uploadlivephoto) | **POST** /live_photos | Upload live photo|
|[**uploadSigningDocument**](#uploadsigningdocument) | **POST** /signing_documents | Upload a signing document|

# **cancelReport**
> cancelReport()

Cancels single paused reports. 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let reportId: string; // (default to undefined)

const { status, data } = await apiInstance.cancelReport(
    reportId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reportId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No Content |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **completeTask**
> completeTask(completeTaskBuilder)

Completes a Send / Receive Data Task. 

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CompleteTaskBuilder
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let workflowRunId: string; //The unique identifier of the Workflow Run to which the Task belongs. (default to undefined)
let taskId: string; //The identifier of the Task you want to complete. (default to undefined)
let completeTaskBuilder: CompleteTaskBuilder; //

const { status, data } = await apiInstance.completeTask(
    workflowRunId,
    taskId,
    completeTaskBuilder
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **completeTaskBuilder** | **CompleteTaskBuilder**|  | |
| **workflowRunId** | [**string**] | The unique identifier of the Workflow Run to which the Task belongs. | defaults to undefined|
| **taskId** | [**string**] | The identifier of the Task you want to complete. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | An empty response body. |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createApplicant**
> Applicant createApplicant(applicantBuilder)

Creates a single applicant. Returns an applicant object. 

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ApplicantBuilder
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let applicantBuilder: ApplicantBuilder; //

const { status, data } = await apiInstance.createApplicant(
    applicantBuilder
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **applicantBuilder** | **ApplicantBuilder**|  | |


### Return type

**Applicant**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createCheck**
> Check createCheck(checkBuilder)

Initiates a check for an applicant, which can contain one or more reports. Returns a check object. 

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CheckBuilder
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let checkBuilder: CheckBuilder; //

const { status, data } = await apiInstance.createCheck(
    checkBuilder
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **checkBuilder** | **CheckBuilder**|  | |


### Return type

**Check**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createTimelineFile**
> TimelineFileReference createTimelineFile()

Triggers the generation of the Timeline File for the designated Workflow Run. 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let workflowRunId: string; //The unique identifier of the Workflow Run. (default to undefined)

const { status, data } = await apiInstance.createTimelineFile(
    workflowRunId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowRunId** | [**string**] | The unique identifier of the Workflow Run. | defaults to undefined|


### Return type

**TimelineFileReference**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | A Timeline File reference. |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createWatchlistMonitor**
> WatchlistMonitor createWatchlistMonitor(watchlistMonitorBuilder)

Creates a new monitor for the applicant 

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    WatchlistMonitorBuilder
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let watchlistMonitorBuilder: WatchlistMonitorBuilder; //

const { status, data } = await apiInstance.createWatchlistMonitor(
    watchlistMonitorBuilder
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **watchlistMonitorBuilder** | **WatchlistMonitorBuilder**|  | |


### Return type

**WatchlistMonitor**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createWebhook**
> Webhook createWebhook(webhookBuilder)

Registers a webhook. Returns a webhook object. 

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    WebhookBuilder
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let webhookBuilder: WebhookBuilder; //

const { status, data } = await apiInstance.createWebhook(
    webhookBuilder
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookBuilder** | **WebhookBuilder**|  | |


### Return type

**Webhook**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createWorkflowRun**
> WorkflowRun createWorkflowRun(workflowRunBuilder)

Creates and starts a Workflow Run. Returns a Workflow Run object. 

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    WorkflowRunBuilder
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let workflowRunBuilder: WorkflowRunBuilder; //

const { status, data } = await apiInstance.createWorkflowRun(
    workflowRunBuilder
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowRunBuilder** | **WorkflowRunBuilder**|  | |


### Return type

**WorkflowRun**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | A Workflow Run object. |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteApplicant**
> deleteApplicant()

Deletes a single applicant. 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let applicantId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteApplicant(
    applicantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **applicantId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No Content |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deletePasskey**
> deletePasskey()

Deletes a passkey. 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let username: string; //Username that owns the passkey. (default to undefined)
let passkeyId: string; //Passkey ID. (default to undefined)

const { status, data } = await apiInstance.deletePasskey(
    username,
    passkeyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **username** | [**string**] | Username that owns the passkey. | defaults to undefined|
| **passkeyId** | [**string**] | Passkey ID. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Passkey deleted |  -  |
|**404** | Passkey not found |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deletePasskeys**
> deletePasskeys()

Removes every passkey for the username. 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let username: string; //Username whose passkeys will be deleted. (default to undefined)

const { status, data } = await apiInstance.deletePasskeys(
    username
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **username** | [**string**] | Username whose passkeys will be deleted. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | All passkeys deleted |  -  |
|**404** | Passkey not found |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteWatchlistMonitor**
> deleteWatchlistMonitor()

Deactivates the given monitor 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let monitorId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteWatchlistMonitor(
    monitorId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **monitorId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No Content |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteWebhook**
> deleteWebhook()

Deletes a webhook. 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let webhookId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteWebhook(
    webhookId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Webhook deleted |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **downloadAesDocument**
> File downloadAesDocument()

Retrieves the signed document or signing transaction receipt depending on the id provided. 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let workflowRunId: string; //The unique identifier of the Workflow Run for which you want to retrieve the signed document. (default to undefined)
let id: string; //The unique identifier of the file which you want to retrieve. (default to undefined)

const { status, data } = await apiInstance.downloadAesDocument(
    workflowRunId,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowRunId** | [**string**] | The unique identifier of the Workflow Run for which you want to retrieve the signed document. | defaults to undefined|
| **id** | [**string**] | The unique identifier of the file which you want to retrieve. | defaults to undefined|


### Return type

**File**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**302** | Found |  * Location - Link to the Timeline File. <br>  |
|**200** | The signed document PDF binary data. |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **downloadCheck**
> File downloadCheck()

Downloads a PDF of a check with a given check ID. Returns the binary data representing the PDF. 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let checkId: string; // (default to undefined)

const { status, data } = await apiInstance.downloadCheck(
    checkId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **checkId** | [**string**] |  | defaults to undefined|


### Return type

**File**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The check PDF binary data |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **downloadDocument**
> File downloadDocument()

Downloads specific documents belonging to an applicant. If successful, the response will be the binary data representing the image. 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let documentId: string; // (default to undefined)

const { status, data } = await apiInstance.downloadDocument(
    documentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|


### Return type

**File**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The document binary data |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **downloadDocumentVideo**
> File downloadDocumentVideo()

Downloads a document video. If successful, the response will be the binary data representing the video. 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let documentId: string; // (default to undefined)

const { status, data } = await apiInstance.downloadDocumentVideo(
    documentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|


### Return type

**File**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The document\&#39;s video binary data |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **downloadEvidenceFolder**
> File downloadEvidenceFolder()

Retrieves the evidence folder for the designated Workflow Run 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let workflowRunId: string; //Workflow Run ID (default to undefined)

const { status, data } = await apiInstance.downloadEvidenceFolder(
    workflowRunId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowRunId** | [**string**] | Workflow Run ID | defaults to undefined|


### Return type

**File**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/zip, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**302** | Found |  * Location - Link to the Timeline File. <br>  |
|**200** | The evidence folder binary data. |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **downloadIdPhoto**
> File downloadIdPhoto()

ID photos are downloaded using this endpoint.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let idPhotoId: string; //The ID photo\'s unique identifier. (default to undefined)

const { status, data } = await apiInstance.downloadIdPhoto(
    idPhotoId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **idPhotoId** | [**string**] | The ID photo\&#39;s unique identifier. | defaults to undefined|


### Return type

**File**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The ID photo\&#39;s binary data. |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **downloadLivePhoto**
> File downloadLivePhoto()

Live photos are downloaded using this endpoint.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let livePhotoId: string; //The live photo\'s unique identifier. (default to undefined)

const { status, data } = await apiInstance.downloadLivePhoto(
    livePhotoId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **livePhotoId** | [**string**] | The live photo\&#39;s unique identifier. | defaults to undefined|


### Return type

**File**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The live photo\&#39;s binary data. |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **downloadLiveVideo**
> File downloadLiveVideo()

Live videos are downloaded using this endpoint.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let liveVideoId: string; //The live video\'s unique identifier. (default to undefined)

const { status, data } = await apiInstance.downloadLiveVideo(
    liveVideoId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **liveVideoId** | [**string**] | The live video\&#39;s unique identifier. | defaults to undefined|


### Return type

**File**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The live video\&#39;s binary data. |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **downloadLiveVideoFrame**
> File downloadLiveVideoFrame()

Returns the binary data representing a single frame from a live video.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let liveVideoId: string; //The live video\'s unique identifier. (default to undefined)

const { status, data } = await apiInstance.downloadLiveVideoFrame(
    liveVideoId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **liveVideoId** | [**string**] | The live video\&#39;s unique identifier. | defaults to undefined|


### Return type

**File**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The live video frame\&#39;s binary data. |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **downloadMotionCapture**
> File downloadMotionCapture()

Motion captures are downloaded using this endpoint.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let motionCaptureId: string; //The motion capture\'s unique identifier. (default to undefined)

const { status, data } = await apiInstance.downloadMotionCapture(
    motionCaptureId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **motionCaptureId** | [**string**] | The motion capture\&#39;s unique identifier. | defaults to undefined|


### Return type

**File**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The motion capture\&#39;s binary data. |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **downloadMotionCaptureFrame**
> File downloadMotionCaptureFrame()

Instead of the whole capture binary, a single frame can be downloaded using this endpoint. Returns the binary data representing the frame.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let motionCaptureId: string; //The motion capture\'s unique identifier. (default to undefined)

const { status, data } = await apiInstance.downloadMotionCaptureFrame(
    motionCaptureId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **motionCaptureId** | [**string**] | The motion capture\&#39;s unique identifier. | defaults to undefined|


### Return type

**File**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The motion capture frame\&#39;s binary data. |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **downloadNfcFace**
> File downloadNfcFace()

Downloads digital photos extracted from specific documents belonging to an applicant. If successful, the response will be the binary data representing the image. 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let documentId: string; // (default to undefined)

const { status, data } = await apiInstance.downloadNfcFace(
    documentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|


### Return type

**File**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The image binary data |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **downloadQesDocument**
> File downloadQesDocument()

Retrieves the signed document or application form depending on the file_id provided. 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let workflowRunId: string; //The unique identifier of the Workflow Run for which you want to retrieve the signed document. (default to undefined)
let fileId: string; //The unique identifier of the file which you want to retrieve. (default to undefined)

const { status, data } = await apiInstance.downloadQesDocument(
    workflowRunId,
    fileId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowRunId** | [**string**] | The unique identifier of the Workflow Run for which you want to retrieve the signed document. | defaults to undefined|
| **fileId** | [**string**] | The unique identifier of the file which you want to retrieve. | defaults to undefined|


### Return type

**File**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**302** | Found |  * Location - Link to the Timeline File. <br>  |
|**200** | The signed document PDF binary data. |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **downloadSesDocument**
> File downloadSesDocument()

Retrieves the signed document or signing transaction receipt depending on the id provided. 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let workflowRunId: string; //The unique identifier of the Workflow Run for which you want to retrieve the signed document. (default to undefined)
let id: string; //The unique identifier of the file which you want to retrieve. (default to undefined)

const { status, data } = await apiInstance.downloadSesDocument(
    workflowRunId,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowRunId** | [**string**] | The unique identifier of the Workflow Run for which you want to retrieve the signed document. | defaults to undefined|
| **id** | [**string**] | The unique identifier of the file which you want to retrieve. | defaults to undefined|


### Return type

**File**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**302** | Found |  * Location - Link to the Timeline File. <br>  |
|**200** | The signed document PDF binary data. |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **downloadSignedEvidenceFile**
> File downloadSignedEvidenceFile()

Retrieves the signed evidence file for the designated Workflow Run 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let workflowRunId: string; //Workflow Run ID (default to undefined)

const { status, data } = await apiInstance.downloadSignedEvidenceFile(
    workflowRunId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowRunId** | [**string**] | Workflow Run ID | defaults to undefined|


### Return type

**File**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**302** | Found |  * Location - Link to the Timeline File. <br>  |
|**200** | The signed evidence PDF binary data. |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **downloadSigningDocument**
> File downloadSigningDocument()

Downloads specific signing documents belonging to an applicant. If successful, the response will be the binary data representing the pdf. 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let signingDocumentId: string; // (default to undefined)

const { status, data } = await apiInstance.downloadSigningDocument(
    signingDocumentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **signingDocumentId** | [**string**] |  | defaults to undefined|


### Return type

**File**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The signing document binary data |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **extract**
> Extraction extract(extractRequest)

Extract information from a document 

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ExtractRequest
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let extractRequest: ExtractRequest; //

const { status, data } = await apiInstance.extract(
    extractRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **extractRequest** | **ExtractRequest**|  | |


### Return type

**Extraction**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Extraction result |  -  |
|**0** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **findAddresses**
> AddressesList findAddresses()

Search for addresses by postcode 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let postcode: string; // (default to undefined)

const { status, data } = await apiInstance.findAddresses(
    postcode
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postcode** | [**string**] |  | defaults to undefined|


### Return type

**AddressesList**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of addresses |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **findApplicant**
> Applicant findApplicant()

Retrieves a single applicant. Returns an applicant object. 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let applicantId: string; // (default to undefined)

const { status, data } = await apiInstance.findApplicant(
    applicantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **applicantId** | [**string**] |  | defaults to undefined|


### Return type

**Applicant**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Applicant object |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **findApplicantConsents**
> Array<ApplicantConsent> findApplicantConsents()

Retrieves consents for single applicant. 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let applicantId: string; // (default to undefined)

const { status, data } = await apiInstance.findApplicantConsents(
    applicantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **applicantId** | [**string**] |  | defaults to undefined|


### Return type

**Array<ApplicantConsent>**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Applicant Consents object |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **findCheck**
> Check findCheck()

Retrieves a single check. Returns a check object. 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let checkId: string; // (default to undefined)

const { status, data } = await apiInstance.findCheck(
    checkId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **checkId** | [**string**] |  | defaults to undefined|


### Return type

**Check**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Check object |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **findDocument**
> Document findDocument()

A single document can be retrieved by calling this endpoint with the document\'s unique identifier. 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let documentId: string; // (default to undefined)

const { status, data } = await apiInstance.findDocument(
    documentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|


### Return type

**Document**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A document |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **findIdPhoto**
> IdPhoto findIdPhoto()

Retrieves a single ID photo. Returns a ID photo object. 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let idPhotoId: string; //The ID photo\'s unique identifier. (default to undefined)

const { status, data } = await apiInstance.findIdPhoto(
    idPhotoId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **idPhotoId** | [**string**] | The ID photo\&#39;s unique identifier. | defaults to undefined|


### Return type

**IdPhoto**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A ID photo |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **findLivePhoto**
> LivePhoto findLivePhoto()

Retrieves a single live photo. Returns a live photo object. 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let livePhotoId: string; //The live photo\'s unique identifier. (default to undefined)

const { status, data } = await apiInstance.findLivePhoto(
    livePhotoId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **livePhotoId** | [**string**] | The live photo\&#39;s unique identifier. | defaults to undefined|


### Return type

**LivePhoto**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A live photo |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **findLiveVideo**
> LiveVideo findLiveVideo()

Retrieves a single live video. Returns the corresponding live video object. 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let liveVideoId: string; //The live video\'s unique identifier. (default to undefined)

const { status, data } = await apiInstance.findLiveVideo(
    liveVideoId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **liveVideoId** | [**string**] | The live video\&#39;s unique identifier. | defaults to undefined|


### Return type

**LiveVideo**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A live video |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **findMotionCapture**
> MotionCapture findMotionCapture()

Retrieves a single motion capture. Returns the corresponding motion capture object. 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let motionCaptureId: string; //The motion capture\'s unique identifier. (default to undefined)

const { status, data } = await apiInstance.findMotionCapture(
    motionCaptureId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **motionCaptureId** | [**string**] | The motion capture\&#39;s unique identifier. | defaults to undefined|


### Return type

**MotionCapture**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A motion capture |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **findPasskey**
> Passkey findPasskey()

Returns a passkey\'s details. 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let username: string; //Username that owns the passkey. (default to undefined)
let passkeyId: string; //Passkey ID. (default to undefined)

const { status, data } = await apiInstance.findPasskey(
    username,
    passkeyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **username** | [**string**] | Username that owns the passkey. | defaults to undefined|
| **passkeyId** | [**string**] | Passkey ID. | defaults to undefined|


### Return type

**Passkey**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The requested passkey |  -  |
|**404** | Passkey not found |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **findReport**
> Report findReport()

A single report can be retrieved using this endpoint with the corresponding unique identifier. 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let reportId: string; // (default to undefined)

const { status, data } = await apiInstance.findReport(
    reportId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reportId** | [**string**] |  | defaults to undefined|


### Return type

**Report**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Report object |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **findSigningDocument**
> SigningDocument findSigningDocument()

A single signing document can be retrieved by calling this endpoint with the signing document\'s unique identifier. 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let signingDocumentId: string; // (default to undefined)

const { status, data } = await apiInstance.findSigningDocument(
    signingDocumentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **signingDocumentId** | [**string**] |  | defaults to undefined|


### Return type

**SigningDocument**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A signing document |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **findTask**
> Task findTask()

A single task can be retrieved by calling this endpoint with the unique identifier of the Task and Workflow Run. 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let workflowRunId: string; //The unique identifier of the Workflow Run to which the Task belongs. (default to undefined)
let taskId: string; //The identifier of the Task you want to retrieve. (default to undefined)

const { status, data } = await apiInstance.findTask(
    workflowRunId,
    taskId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowRunId** | [**string**] | The unique identifier of the Workflow Run to which the Task belongs. | defaults to undefined|
| **taskId** | [**string**] | The identifier of the Task you want to retrieve. | defaults to undefined|


### Return type

**Task**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A Task object. |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **findTimelineFile**
> File findTimelineFile()

Retrieves the Timeline File for the designated Workflow Run. 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let workflowRunId: string; //The unique identifier of the Workflow Run. (default to undefined)
let timelineFileId: string; //The unique identifier for the Timefile File. (default to undefined)

const { status, data } = await apiInstance.findTimelineFile(
    workflowRunId,
    timelineFileId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowRunId** | [**string**] | The unique identifier of the Workflow Run. | defaults to undefined|
| **timelineFileId** | [**string**] | The unique identifier for the Timefile File. | defaults to undefined|


### Return type

**File**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**302** | Found |  * Location - Link to the Timeline File. <br>  |
|**200** | The Timeline File PDF binary data. |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **findWatchlistMonitor**
> WatchlistMonitor findWatchlistMonitor()

Retrieves a single monitor 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let monitorId: string; //The watchlist monitor\'s unique identifier. (default to undefined)

const { status, data } = await apiInstance.findWatchlistMonitor(
    monitorId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **monitorId** | [**string**] | The watchlist monitor\&#39;s unique identifier. | defaults to undefined|


### Return type

**WatchlistMonitor**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A watchlist monitor |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **findWebhook**
> Webhook findWebhook()

Retrieves a single webhook. Returns a webhook object. 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let webhookId: string; // (default to undefined)

const { status, data } = await apiInstance.findWebhook(
    webhookId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookId** | [**string**] |  | defaults to undefined|


### Return type

**Webhook**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Webhook object |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **findWorkflowRun**
> WorkflowRun findWorkflowRun()

A single workflow run can be retrieved by calling this endpoint with the unique identifier of the Workflow Run. 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let workflowRunId: string; //The unique identifier of the Workflow Run. (default to undefined)

const { status, data } = await apiInstance.findWorkflowRun(
    workflowRunId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowRunId** | [**string**] | The unique identifier of the Workflow Run. | defaults to undefined|


### Return type

**WorkflowRun**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A Workflow Run object. |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **forceReportCreationFromWatchlistMonitor**
> forceReportCreationFromWatchlistMonitor()

Triggers a new check with an updated report to be generated by the monitor, as if the monitor had received an update. 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let monitorId: string; // (default to undefined)

const { status, data } = await apiInstance.forceReportCreationFromWatchlistMonitor(
    monitorId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **monitorId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  * Location - Link to the newly generated report. <br>  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateSdkToken**
> SdkToken generateSdkToken(sdkTokenBuilder)

Generates an SDK token. Returns a token object containing the SDK token. 

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    SdkTokenBuilder
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let sdkTokenBuilder: SdkTokenBuilder; //

const { status, data } = await apiInstance.generateSdkToken(
    sdkTokenBuilder
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sdkTokenBuilder** | **SdkTokenBuilder**|  | |


### Return type

**SdkToken**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Generated |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listApplicants**
> ApplicantsList listApplicants()

Lists all applicants you\'ve created, sorted by creation date in descending order. 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let page: number; //The page to return. The first page is `page=1` (optional) (default to 1)
let perPage: number; //The number of objects per page. (optional) (default to 20)
let includeDeleted: boolean; //Whether to also include applicants scheduled for deletion. (optional) (default to false)

const { status, data } = await apiInstance.listApplicants(
    page,
    perPage,
    includeDeleted
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | The page to return. The first page is &#x60;page&#x3D;1&#x60; | (optional) defaults to 1|
| **perPage** | [**number**] | The number of objects per page. | (optional) defaults to 20|
| **includeDeleted** | [**boolean**] | Whether to also include applicants scheduled for deletion. | (optional) defaults to false|


### Return type

**ApplicantsList**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of applicants |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listChecks**
> ChecksList listChecks()

Retrieves a single check. Returns a check object. 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let applicantId: string; // (default to undefined)

const { status, data } = await apiInstance.listChecks(
    applicantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **applicantId** | [**string**] |  | defaults to undefined|


### Return type

**ChecksList**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | An array of checks |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listDocuments**
> DocumentsList listDocuments()

All documents belonging to an applicant can be listed from this endpoint

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let applicantId: string; // (default to undefined)

const { status, data } = await apiInstance.listDocuments(
    applicantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **applicantId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentsList**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of Documents |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listIdPhotos**
> IdPhotosList listIdPhotos()

Lists the ID photos that belong to an applicant. 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let applicantId: string; //The id of the applicant the ID photos belong to. (default to undefined)

const { status, data } = await apiInstance.listIdPhotos(
    applicantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **applicantId** | [**string**] | The id of the applicant the ID photos belong to. | defaults to undefined|


### Return type

**IdPhotosList**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | An array of ID photos |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listLivePhotos**
> LivePhotosList listLivePhotos()

Lists the live photos that belong to an applicant. 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let applicantId: string; //The id of the applicant the live photos belong to. (default to undefined)

const { status, data } = await apiInstance.listLivePhotos(
    applicantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **applicantId** | [**string**] | The id of the applicant the live photos belong to. | defaults to undefined|


### Return type

**LivePhotosList**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | An array of live photos |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listLiveVideos**
> LiveVideosList listLiveVideos()

Lists all the live videos that belong to an applicant. 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let applicantId: string; //The id of the applicant the live videos belong to. (default to undefined)

const { status, data } = await apiInstance.listLiveVideos(
    applicantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **applicantId** | [**string**] | The id of the applicant the live videos belong to. | defaults to undefined|


### Return type

**LiveVideosList**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | An array of live videos |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listMotionCaptures**
> MotionCapturesList listMotionCaptures()

Lists all the motion captures that belong to an applicant. 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let applicantId: string; //The id of the applicant the motion captures belong to. (default to undefined)

const { status, data } = await apiInstance.listMotionCaptures(
    applicantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **applicantId** | [**string**] | The id of the applicant the motion captures belong to. | defaults to undefined|


### Return type

**MotionCapturesList**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | An array of motion captures |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listPasskeys**
> PasskeysList listPasskeys()

Returns every passkey registered under the supplied username. 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let username: string; //Username that owns the passkeys. (default to undefined)

const { status, data } = await apiInstance.listPasskeys(
    username
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **username** | [**string**] | Username that owns the passkeys. | defaults to undefined|


### Return type

**PasskeysList**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Passkeys belonging to the username |  -  |
|**404** | Passkey not found |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listRepeatAttempts**
> RepeatAttemptsList listRepeatAttempts()

Returns all repeat attempts for a given Document report 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let reportId: string; // (default to undefined)

const { status, data } = await apiInstance.listRepeatAttempts(
    reportId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reportId** | [**string**] |  | defaults to undefined|


### Return type

**RepeatAttemptsList**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Repeat attempts object |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listReports**
> ReportsList listReports()

All the reports belonging to a particular check can be listed from this endpoint. 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let checkId: string; // (default to undefined)

const { status, data } = await apiInstance.listReports(
    checkId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **checkId** | [**string**] |  | defaults to undefined|


### Return type

**ReportsList**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of Reports |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listSigningDocuments**
> SigningDocumentsList listSigningDocuments()

All signing documents belonging to an applicant can be listed from this endpoint

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let applicantId: string; // (default to undefined)

const { status, data } = await apiInstance.listSigningDocuments(
    applicantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **applicantId** | [**string**] |  | defaults to undefined|


### Return type

**SigningDocumentsList**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of Signing Documents |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listTasks**
> Array<TaskItem> listTasks()

The tasks of a Workflow can be retrieved by calling this endpoint with the unique identifier of the Workflow Run. 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let workflowRunId: string; //The unique identifier of the Workflow Run to which the Tasks belong. (default to undefined)

const { status, data } = await apiInstance.listTasks(
    workflowRunId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowRunId** | [**string**] | The unique identifier of the Workflow Run to which the Tasks belong. | defaults to undefined|


### Return type

**Array<TaskItem>**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | An array of subset Task objects that were already started or completed, ordered by the created_at field, in ascending order. |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listWatchlistMonitorMatches**
> WatchlistMonitorMatchesList listWatchlistMonitorMatches()

List match IDs on this monitor, as well as their enabled/disabled status 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let monitorId: string; // (default to undefined)

const { status, data } = await apiInstance.listWatchlistMonitorMatches(
    monitorId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **monitorId** | [**string**] |  | defaults to undefined|


### Return type

**WatchlistMonitorMatchesList**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | An array of watchlist monitors |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listWatchlistMonitors**
> WatchlistMonitorsList listWatchlistMonitors()

List all available monitors for an applicant 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let applicantId: string; //The id of the applicant the watchlist monitors belong to. If omitted, all monitors for the account will be listed. (default to undefined)
let includeDeleted: boolean; //Whether to also include deleted (inactive) monitors. (optional) (default to false)

const { status, data } = await apiInstance.listWatchlistMonitors(
    applicantId,
    includeDeleted
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **applicantId** | [**string**] | The id of the applicant the watchlist monitors belong to. If omitted, all monitors for the account will be listed. | defaults to undefined|
| **includeDeleted** | [**boolean**] | Whether to also include deleted (inactive) monitors. | (optional) defaults to false|


### Return type

**WatchlistMonitorsList**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | An array of watchlist monitors |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listWebhooks**
> WebhooksList listWebhooks()

Lists all webhooks you\'ve created. 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.listWebhooks();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**WebhooksList**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of webhooks |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listWorkflowRuns**
> Array<WorkflowRun> listWorkflowRuns()

Retrieves the Workflow Runs of the client. Returns a list of Workflow Run objects. 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let page: number; //The number of the page to be retrieved. If not specified, defaults to 1. (optional) (default to 1)
let status: string; //A list of comma separated status values to filter the results. Possible values are \'processing\', \'awaiting_input\', \'approved\', \'declined\', \'review\', \'abandoned\' and \'error\'. (optional) (default to undefined)
let createdAtGt: string; //A ISO-8601 date to filter results with a created date greater than (after) the one provided. (optional) (default to undefined)
let createdAtLt: string; //A ISO-8601 date to filter results with a created date less than (before) the one provided. (optional) (default to undefined)
let sort: 'desc' | 'asc'; //A string with the value \'desc\' or \'asc\' that allows to sort the returned list by the completed datetime either descending or ascending, respectively. If not specified, defaults to \'desc\'. (optional) (default to 'desc')
let applicantId: string; //the applicant\'s id. (optional) (default to undefined)
let tags: Array<string>; //A list of tags to filter the results. (optional) (default to undefined)

const { status, data } = await apiInstance.listWorkflowRuns(
    page,
    status,
    createdAtGt,
    createdAtLt,
    sort,
    applicantId,
    tags
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | The number of the page to be retrieved. If not specified, defaults to 1. | (optional) defaults to 1|
| **status** | [**string**] | A list of comma separated status values to filter the results. Possible values are \&#39;processing\&#39;, \&#39;awaiting_input\&#39;, \&#39;approved\&#39;, \&#39;declined\&#39;, \&#39;review\&#39;, \&#39;abandoned\&#39; and \&#39;error\&#39;. | (optional) defaults to undefined|
| **createdAtGt** | [**string**] | A ISO-8601 date to filter results with a created date greater than (after) the one provided. | (optional) defaults to undefined|
| **createdAtLt** | [**string**] | A ISO-8601 date to filter results with a created date less than (before) the one provided. | (optional) defaults to undefined|
| **sort** | [**&#39;desc&#39; | &#39;asc&#39;**]**Array<&#39;desc&#39; &#124; &#39;asc&#39; &#124; &#39;11184809&#39;>** | A string with the value \&#39;desc\&#39; or \&#39;asc\&#39; that allows to sort the returned list by the completed datetime either descending or ascending, respectively. If not specified, defaults to \&#39;desc\&#39;. | (optional) defaults to 'desc'|
| **applicantId** | [**string**] | the applicant\&#39;s id. | (optional) defaults to undefined|
| **tags** | **Array&lt;string&gt;** | A list of tags to filter the results. | (optional) defaults to undefined|


### Return type

**Array<WorkflowRun>**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | An array of Workflow Run objects matching the query parameters. |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ping**
> string ping()

Run a health check on the Onfido API 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.ping();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**string**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Regional base URL is operational |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postResultsFeedback**
> ResultsFeedback postResultsFeedback(resultsFeedback)

Create Feedback on checks and reports 

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ResultsFeedback
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let resultsFeedback: ResultsFeedback; //

const { status, data } = await apiInstance.postResultsFeedback(
    resultsFeedback
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resultsFeedback** | **ResultsFeedback**|  | |


### Return type

**ResultsFeedback**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Created feedback |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resendWebhooks**
> resendWebhooks(webhookResend)

Resends events to all webhooks registered with a matching environment in your account. 

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    WebhookResend
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let webhookResend: WebhookResend; //

const { status, data } = await apiInstance.resendWebhooks(
    webhookResend
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookResend** | **WebhookResend**|  | |


### Return type

void (empty response body)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Webhooks are resent for the respective checks |  -  |
|**422** | Request was received but it could not be processed |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **restoreApplicant**
> restoreApplicant()

Restores a single applicant scheduled for deletion. 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let applicantId: string; // (default to undefined)

const { status, data } = await apiInstance.restoreApplicant(
    applicantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **applicantId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No Content |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resumeCheck**
> resumeCheck()

Resumes a paused check. 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let checkId: string; // (default to undefined)

const { status, data } = await apiInstance.resumeCheck(
    checkId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **checkId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No Content |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resumeReport**
> resumeReport()

Resumes a single paused report. 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let reportId: string; // (default to undefined)

const { status, data } = await apiInstance.resumeReport(
    reportId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reportId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No Content |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateApplicant**
> Applicant updateApplicant(applicantUpdater)

Allows updating applicant\'s information before any checks is created. - Partial updates - Addresses and ID numbers present will replace existing ones - Same applicant validations to create applicant 

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ApplicantUpdater
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let applicantId: string; // (default to undefined)
let applicantUpdater: ApplicantUpdater; //

const { status, data } = await apiInstance.updateApplicant(
    applicantId,
    applicantUpdater
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **applicantUpdater** | **ApplicantUpdater**|  | |
| **applicantId** | [**string**] |  | defaults to undefined|


### Return type

**Applicant**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Applicant Object |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updatePasskey**
> Passkey updatePasskey(passkeyUpdater)

Updates a passkey\'s state. 

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    PasskeyUpdater
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let username: string; //Username that owns the passkey. (default to undefined)
let passkeyId: string; //Passkey ID. (default to undefined)
let passkeyUpdater: PasskeyUpdater; //Passkey update payload.

const { status, data } = await apiInstance.updatePasskey(
    username,
    passkeyId,
    passkeyUpdater
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **passkeyUpdater** | **PasskeyUpdater**| Passkey update payload. | |
| **username** | [**string**] | Username that owns the passkey. | defaults to undefined|
| **passkeyId** | [**string**] | Passkey ID. | defaults to undefined|


### Return type

**Passkey**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Passkey updated |  -  |
|**400** | Invalid request body |  -  |
|**404** | Passkey not found |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateWatchlistMonitorMatch**
> WatchlistMonitorMatchesList updateWatchlistMonitorMatch(watchlistMonitorMatchesUpdater)

Update the status of the given matches 

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    WatchlistMonitorMatchesUpdater
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let monitorId: string; // (default to undefined)
let watchlistMonitorMatchesUpdater: WatchlistMonitorMatchesUpdater; //

const { status, data } = await apiInstance.updateWatchlistMonitorMatch(
    monitorId,
    watchlistMonitorMatchesUpdater
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **watchlistMonitorMatchesUpdater** | **WatchlistMonitorMatchesUpdater**|  | |
| **monitorId** | [**string**] |  | defaults to undefined|


### Return type

**WatchlistMonitorMatchesList**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | An array of watchlist monitors |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateWebhook**
> Webhook updateWebhook(webhookUpdater)

Edits a webhook. Returns the updated webhook object. 

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    WebhookUpdater
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let webhookId: string; // (default to undefined)
let webhookUpdater: WebhookUpdater; //

const { status, data } = await apiInstance.updateWebhook(
    webhookId,
    webhookUpdater
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookUpdater** | **WebhookUpdater**|  | |
| **webhookId** | [**string**] |  | defaults to undefined|


### Return type

**Webhook**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Webhook Object |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadDocument**
> Document uploadDocument()

Documents are uploaded using this endpoint. Along with the file upload the relevant document type must be specified. Documents must be uploaded as a multipart form. The valid file types are: jpg, png and pdf. The file size must be between 2KB and 3MB. 

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    LocationBuilder
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let type: DocumentTypes; //The type of document (default to undefined)
let applicantId: string; //The ID of the applicant whose document is being uploaded. (default to undefined)
let file: File; //The file to be uploaded. (default to undefined)
let fileType: string; //The file type of the uploaded file (optional) (default to undefined)
let side: string; //The side of the document, if applicable. The possible values are front and back (optional) (default to undefined)
let issuingCountry: CountryCodes; //The issuing country of the document, a 3-letter ISO code. (optional) (default to undefined)
let validateImageQuality: boolean; //Defaults to false. When true the submitted image will undergo an image quality validation which may take up to 5 seconds. (optional) (default to undefined)
let location: LocationBuilder; // (optional) (default to undefined)

const { status, data } = await apiInstance.uploadDocument(
    type,
    applicantId,
    file,
    fileType,
    side,
    issuingCountry,
    validateImageQuality,
    location
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **type** | [**DocumentTypes**] | The type of document | defaults to undefined|
| **applicantId** | [**string**] | The ID of the applicant whose document is being uploaded. | defaults to undefined|
| **file** | [**File**] | The file to be uploaded. | defaults to undefined|
| **fileType** | [**string**] | The file type of the uploaded file | (optional) defaults to undefined|
| **side** | [**string**]**Array<&#39;front&#39; &#124; &#39;back&#39; &#124; &#39;11184809&#39;>** | The side of the document, if applicable. The possible values are front and back | (optional) defaults to undefined|
| **issuingCountry** | [**CountryCodes**] | The issuing country of the document, a 3-letter ISO code. | (optional) defaults to undefined|
| **validateImageQuality** | [**boolean**] | Defaults to false. When true the submitted image will undergo an image quality validation which may take up to 5 seconds. | (optional) defaults to undefined|
| **location** | **LocationBuilder** |  | (optional) defaults to undefined|


### Return type

**Document**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | A document |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadIdPhoto**
> IdPhoto uploadIdPhoto()

You can upload ID photos to this endpoint. Like document upload, files must be uploaded as a multipart form. Valid file types are jpg, png and pdf. The file size must be between 32KB and 10MB. 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let applicantId: string; //The ID of the applicant whose ID photo is being uploaded. (optional) (default to undefined)
let file: File; //The file to be uploaded. (optional) (default to undefined)

const { status, data } = await apiInstance.uploadIdPhoto(
    applicantId,
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **applicantId** | [**string**] | The ID of the applicant whose ID photo is being uploaded. | (optional) defaults to undefined|
| **file** | [**File**] | The file to be uploaded. | (optional) defaults to undefined|


### Return type

**IdPhoto**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | The ID photo |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadLivePhoto**
> LivePhoto uploadLivePhoto()

You can upload live photos to this endpoint. Like document upload, files must be uploaded as a multipart form. Valid file types are jpg, png and pdf. The file size must be between 32KB and 10MB. Live photos are validated at the point of upload to check that they contain exactly one face. This validation can be disabled by setting the advanced_validation argument to false. 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let applicantId: string; //The ID of the applicant whose live photo is being uploaded. (optional) (default to undefined)
let file: File; //The file to be uploaded. (optional) (default to undefined)
let advancedValidation: boolean; //Validates that the live photo contains exactly one face. (optional) (default to true)

const { status, data } = await apiInstance.uploadLivePhoto(
    applicantId,
    file,
    advancedValidation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **applicantId** | [**string**] | The ID of the applicant whose live photo is being uploaded. | (optional) defaults to undefined|
| **file** | [**File**] | The file to be uploaded. | (optional) defaults to undefined|
| **advancedValidation** | [**boolean**] | Validates that the live photo contains exactly one face. | (optional) defaults to true|


### Return type

**LivePhoto**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | The Live Photo |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadSigningDocument**
> SigningDocument uploadSigningDocument()

Signing documents are uploaded using this endpoint. Signing documents must be uploaded as a multipart form. The only valid file type is pdf. The file size must be between 2KB and 3MB. 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@onfido/api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let applicantId: string; //The ID of the applicant whose signing document is being uploaded. (default to undefined)
let file: File; //The file to be uploaded. (default to undefined)

const { status, data } = await apiInstance.uploadSigningDocument(
    applicantId,
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **applicantId** | [**string**] | The ID of the applicant whose signing document is being uploaded. | defaults to undefined|
| **file** | [**File**] | The file to be uploaded. | defaults to undefined|


### Return type

**SigningDocument**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | A signing document |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

