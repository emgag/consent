/*
 * Consent bundle (shim & Civic Cookie Control)
 */

import Consent_Civic from "./integration/civic";
global.Consent_Civic = Consent_Civic;

import Consent_Noop from "./integration/noop";
global.Consent_Noop = Consent_Noop;

import Consent from "./consent/shim";
global.Consent = Consent;

import makeStub from '@iabtcf/stub';
makeStub();
