/*
 * Consent bundle (shim & oiljs)
 */

import Consent_OilJS from "./integration/oiljs";
global.Consent_OilJS = Consent_OilJS;

import Consent from "./consent/shim";
global.Consent = Consent;

