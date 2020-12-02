/*
 * Consent bundle (shim & Quantcast Coice)
 */

import Consent_Quantcast from "./integration/quantcast";
global.Consent_Quantcast = Consent_Quantcast;

import Consent from "./consent/shim";
global.Consent = Consent;

