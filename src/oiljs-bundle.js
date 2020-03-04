/*
 * Consent bundle (shim & oiljs)
 */

import Consent_OilJS from "./integration/oiljs";
global.Consent_OilJS = Consent_OilJS;

import Consent_Noop from "./integration/noop";
global.Consent_Noop = Consent_Noop;

import Consent from "./consent/shim";
global.Consent = Consent;

