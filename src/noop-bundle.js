/*
 * Consent bundle (shim & noop)
 */

import Consent_Noop from "./integration/noop";
global.Consent_Noop = Consent_Noop;

import Consent from "./consent/shim";
global.Consent = Consent;

