/*
 * Consent bundle (shim & Civic Cookie Control)
 */

import Consent_Civic from "./integration/civic";
import Consent from "./consent/shim";

global.Consent_Civic = Consent_Civic;
global.Consent = Consent;
