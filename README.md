# neptunesoftware-dxp-abb-plantmaintenance
Plant Maintenance Bundle Apps

## Table of Contents
- [Overview](#overview)
- [Prerequisites](#prerequisites)
  - [Neptune DXP SAP Edition Prerequisites](#neptune-dxp-sap-edition-prerequisites)
  - [Neptune DXP SAP Edition Prerequisites](#neptune-dxp-open-edition-prerequisites)
  - [Neptune DXP Version Compatibility](#neptune-dxp-version-compatibility)
    - [Neptune DXP SAP Edition Version](#neptune-dxp-sap-edition-version)
    - [Neptune DXP Open Edition Version](#neptune-dxp-open-edition-version)
  - [Recommended Naming Conventions & Namespaces](#recommended-naming-conventions--namespaces)
- [Neptune DXP SAP Edition Setup](#neptune-dxp-sap-edition-setup)
  - [Step 1. Copying & Pasting the ABAP code included in the app repository](#neptune-dxp-sap-edition-setup)
  - [Step 2. Access the Neptune cockpit & using the API Factory](#neptune-dxp-sap-edition-setup)
- [Neptune DXP Open Edition Setup](#neptune-dxp-open-edition-setup)
  - [Step 3. Connecting the included API in Open Edition to the newly created API Factory API in SAP Edition](#step-3-connecting-the-included-api-in-open-edition-to-the-newly-created-api-factory-api-in-sap-edition)

## Overview
This bundle showcases a Plant Maintenance (PM) integration scenario between Neptune DXP Open Edition and Neptune DXP SAP Edition using API Factory. It serves as a reference implementation for exposing ABAP-based business logic in an SAP backend system and consuming it from an application running on Open Edition through a standardized API interface.

The bundle also includes three source files containing the ABAP implementations required to define the custom Z interfaces and the corresponding data provider class in the SAP backend.

These custom Z interfaces and the data provider class are required to enable data retrieval from the SAP system and to expose the data via the Neptune DXP SAP Edition _**'API Factory tool'**_, allowing it to be consumed and rendered in the Open Edition application.

## Prerequisites
Before implementing this integration scenario, ensure that the following prerequisites are met.

### Neptune DXP SAP Edition Prerequisites:
- The SAP user must have the required SAP authorizations to create and activate custom ABAP artifacts, including interfaces (_**'ZIF'**_) and data provider classes (_**'ZCL'**_), using the transaction _**'SE24'**_.
- The SAP user must be authorized to read and write data in the SAP backend system through _Function Modules_ and _BAPIs_ that are consumed by the custom ABAP logic.
- The SAP user access to the [Neptune DXP SAP Edition Cockpit](https://docs.neptune-software.com/neptune-sap-edition/24/getting-started-guide/open-cockpit.html) via **_'/n/NEPTUNE/COCKPIT'_** is required, including user access [policy](https://docs.neptune-software.com/neptune-sap-edition/24/cockpit-overview/policy.html#_policy_tab) **_(if policies are required in the SAP Edition)_** to use relevant tools such as the [API Factory](https://docs.neptune-software.com/neptune-sap-edition/24/cockpit-overview/api-factory.html#_abap_artifacts_with_automated_api) for exposing ABAP classes as APIs.

### Neptune DXP Open Edition Prerequisites:
- In Neptune DXP Open Edition, the user must have [role](https://docs.neptune-software.com/neptune-dxp-open-edition/24/cockpit-overview/security-role.html) based access to create and maintain artifacts, including _'APIs'_ via the [API Designer](https://docs.neptune-software.com/neptune-dxp-open-edition/24/cockpit-overview/api-designer.html) and _applications_ via the [App Designer](https://docs.neptune-software.com/neptune-dxp-open-edition/24/cockpit-overview/app-designer.html).
- The user must have [role](https://docs.neptune-software.com/neptune-dxp-open-edition/24/cockpit-overview/security-role.html) based access to create and maintain [Proxy Authentication](https://docs.neptune-software.com/neptune-dxp-open-edition/24/cockpit-overview/security-proxy-auth.html) artifacts that need to be added to an API in Neptune DXP Open Edition.

## Neptune DXP Version Compatibility
While the Neptune DXP - SAP Edition and Open Edition cater to different user environments and have unique requirements, leveraging this bundle with an end-to-end solution across both versions in mind, requires understanding their compatibility.

Users can import the Materials Management bundle into DXP versions earlier than DXP 24; however, these versions are _**NOT**_ supported for maintenance or ongoing updates if any issues occur with the bundle artifacts.

### Neptune DXP SAP Edition Version
Recommended Version: _**Neptune DXP - SAP Edition 24.14.0000**_
Released: Q4/2025

### Neptune DXP Open Edition Version
Recommended Version: _**Neptune DXP - Open Edition 24.14.0**_
Released: Q4/2025

## Recommended Naming Conventions & Namespaces
To ensure a streamlined and consistent import process for the provided source files that implement the exposure of ABAP-based business logic in the SAP backend system, it is recommended to retain the naming conventions and namespaces as defined in the delivered artifacts.

The delivered implementation consists of three ABAP source files: two interface definitions — _**ZIF_UI_PM_NOTIF_DXP_TMP_GET**_ and _**ZIF_UI_PM_NOTIF_DXP_TMP_POST**_ — and one data provider class, _**ZCL_UI_PM_NOTIFICATION_DXP_TMP**_, which serves as the central integration component.

## Neptune DXP SAP Edition Setup
The setup guide for the required files to be imported and used in Neptune DXP SAP Edition provides a step-by-step procedure for correctly importing the delivered custom Z interfaces and the associated data provider class into the SAP backend system.

**_NOTE_**: To simplify the import procedure and ensure consistency throughout this guide, the names of the custom artifacts and the data provider class should be kept identical to those defined in the provided files. _**For example**_, the data provider class referenced in this guide is named **_'ZCL_UI_PM_NOTIFICATION_DXP_TMP'_** and should be kept the same when importing to the SAP backend system.

### Step 1. Copying & Pasting the ABAP code included in the app repository

Begin by copying the ABAP source code for each custom ZIF interface into the SAP Class Builder using the SAP TCode _**'SE24'**_.

Subsequently, copy the ABAP source code for the custom ZCL data provider class into the SAP TCode _**'SE24'**_ and activate the class. Upon successful import, the data provider class should appear as shown below: 
<img width="1201" height="794" alt="image" src="https://github.com/user-attachments/assets/9cac9f1e-9863-462b-ae8e-158ec369e9c1" />


### Step 2. Access the Neptune cockpit & using the API Factory

After successfully importing and activating the ABAP **_ZIF_** interfaces (**_'ZIF_UI_PM_NOTIF_DXP_TMP_GET'_** & **_'ZIF_UI_PM_NOTIF_DXP_TMP_GET'_**) and the corresponding **_'ZCL'_** data provider class (**_'ZCL_UI_PM_NOTIFICATION_DXP_TMP'_**), open the Neptune DXP SAP Edition Cockpit using transaction **_'/n/NEPTUNE/COCKPIT' _** in a new SAP GUI window.

From the Neptune DXP SAP Edition Cockpit, navigate to the **_API Factory tool_** and select the newly created ABAP data provider class. The generated API name will correspond directly to the name of the ABAP class (**_'ZCL_UI_PM_NOTIFICATION_DXP_TMP'_**) defined in the SAP backend system.
<img width="3694" height="1060" alt="image" src="https://github.com/user-attachments/assets/07118170-434e-4a3d-9161-eaf5e7e50be1" />


Navigate to the Policy tab and set the _Unrestricted API Engine_ option to **'Yes'** to allow unrestricted access to the API.
If access control is required, define a custom policy by selecting **'Add'**, assign the appropriate users or roles, and set _Unrestricted API Engine_ to **'No'**. 
<img width="1006" height="602" alt="image" src="https://github.com/user-attachments/assets/4ba16006-88d1-465b-ab43-414269e33afc" /> 

Once the policy configuration is complete, the API can be validated and tested using the _**'Swagger UI'**_ tab prior to being consumed by applications running on Neptune DXP Open Edition.
<img width="3695" height="1933" alt="image" src="https://github.com/user-attachments/assets/ec63a8ba-0de5-485e-9b08-22b4dd89eb0a" />


<img width="2117" height="1299" alt="image" src="https://github.com/user-attachments/assets/aae20865-ecd1-4e4c-9d5b-f9528bd8e4eb" />


## Neptune DXP Open Edition Setup

### Step 3. Connecting the included API in Open Edition to the newly created API Factory API in SAP Edition 

In Neptune DXP Open Edition, the downloaded Marketplace bundle includes a preconfigured API definition. All operations, schemas, and mappings are already defined and **_DO NOT_** require modification. The only required change is to update the API _endpoint URL_ from
"_https://Your_SAP_Edition_URL.neptune-software.com/neptune/api/dynamic/zcl_ui_pm_notification_dxp_tmp_"
to the actual endpoint exposed by the API Factory in your Neptune DXP SAP Edition system.
<img width="2507" height="1931" alt="image" src="https://github.com/user-attachments/assets/c878fd40-44f4-4fc0-b686-309c7b5f4539" />

The generated API endpoint can be retrieved from the _API Factory tool_ in Neptune DXP SAP Edition under the _Swagger UI_ tab. Either of the provided service URLs may be used as the base endpoint for the API configuration in Neptune DXP Open Edition.
<img width="1805" height="623" alt="image" src="https://github.com/user-attachments/assets/edcbe8a2-7542-4534-a91b-069e134e9dbb" />

In the _**'API Designer'**_ tool of Neptune DXP Open Edition, replace the existing endpoint with the newly retrieved SAP Edition API Factory URL and save the configuration.
<img width="1828" height="244" alt="image" src="https://github.com/user-attachments/assets/81fa4c3f-aea3-489b-a176-ea7b69b354da" />

As a final step, verify that the _Enable Proxy_ and _Use in App Designer_ options remain enabled (these are selected by default). Since the API is consumed externally from SAP to Neptune DXP Open Edition, **'proxy-based authentication'** must be configured.

<img width="620" height="339" alt="image" src="https://github.com/user-attachments/assets/1c0e21aa-b8c2-4a8c-a9e2-2036ff534b83" />


To secure the API, assign a _**'Proxy Authentication'**_ configuration based on an existing SAP user. Additional authentication mechanisms can be created and managed using the _Proxy Authentication_ tool, if required.
<img width="1296" height="336" alt="image" src="https://github.com/user-attachments/assets/146dc5e3-0fca-4a39-9a4f-d6087a701be1" />

Now the API is ready to be consumed and the app can retrieve the data from SAP in Neptune DXP Open Edition. 
