import debug from 'debug';

/**
 * Expose all types.
 */
export * as types from './types';

/**
 * Expose mediasoup-client version.
 */
export const version = '__MEDIASOUP_CLIENT_VERSION__';

/**
 * Expose Device class and device detector helpers.
 */
export { Device, detectDevice, detectDeviceAsync } from './Device';

// make these types available from 'medias-client'
export type { DtlsParameters, IceCandidate, IceParameters } from './Transport';

/**
 * Expose parseScalabilityMode() function.
 */
export { parse as parseScalabilityMode } from './scalabilityModes';

/**
 * Expose all ORTC functions.
 */
export * as ortc from './ortc';

/**
 * Expose enhanced events.
 */
export * as enhancedEvents from './enhancedEvents';

/**
 * Expose FakeHandler.
 */
export { FakeHandler } from './handlers/FakeHandler';

/**
 * Expose test/fakeParameters utils.
 */
export * as testFakeParameters from './test/fakeParameters';

/**
 * Expose the debug module.
 */
export { debug };
