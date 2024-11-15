// @ts-nocheck
/* tslint:disable */
/* eslint-disable */
/**
 * Jupiter API v6
 * The core of [jup.ag](https://jup.ag). Easily get a quote and swap through Jupiter API.  ### Rate Limit We update our rate limit from time to time depending on the load of our servers. We recommend running your own instance of the API if you want to have high rate limit, here to learn how to run the [self-hosted API](https://station.jup.ag/docs/apis/self-hosted).  ### API Wrapper - Typescript [@jup-ag/api](https://github.com/jup-ag/jupiter-quote-api-node)  ### Data types - Public keys are base58 encoded strings - raw data such as Vec<u8\\> are base64 encoded strings 
 *
 * The version of the OpenAPI document: 6.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Instruction } from './Instruction';
import {
    InstructionFromJSON,
    InstructionFromJSONTyped,
    InstructionToJSON,
} from './Instruction';

/**
 * 
 * @export
 * @interface SwapInstructionsResponse
 */
export interface SwapInstructionsResponse {
    /**
     * 
     * @type {Instruction}
     * @memberof SwapInstructionsResponse
     */
    tokenLedgerInstruction?: Instruction;
    /**
     * The necessary instructions to setup the compute budget.
     * @type {Array<Instruction>}
     * @memberof SwapInstructionsResponse
     */
    computeBudgetInstructions: Array<Instruction>;
    /**
     * Setup missing ATA for the users.
     * @type {Array<Instruction>}
     * @memberof SwapInstructionsResponse
     */
    setupInstructions: Array<Instruction>;
    /**
     * 
     * @type {Instruction}
     * @memberof SwapInstructionsResponse
     */
    swapInstruction: Instruction;
    /**
     * 
     * @type {Instruction}
     * @memberof SwapInstructionsResponse
     */
    cleanupInstruction?: Instruction;
    /**
     * The lookup table addresses that you can use if you are using versioned transaction.
     * @type {Array<string>}
     * @memberof SwapInstructionsResponse
     */
    addressLookupTableAddresses: Array<string>;
}

/**
 * Check if a given object implements the SwapInstructionsResponse interface.
 */
export function instanceOfSwapInstructionsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "computeBudgetInstructions" in value;
    isInstance = isInstance && "setupInstructions" in value;
    isInstance = isInstance && "swapInstruction" in value;
    isInstance = isInstance && "addressLookupTableAddresses" in value;

    return isInstance;
}

export function SwapInstructionsResponseFromJSON(json: any): SwapInstructionsResponse {
    return SwapInstructionsResponseFromJSONTyped(json, false);
}

export function SwapInstructionsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SwapInstructionsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tokenLedgerInstruction': !exists(json, 'tokenLedgerInstruction') ? undefined : InstructionFromJSON(json['tokenLedgerInstruction']),
        'computeBudgetInstructions': ((json['computeBudgetInstructions'] as Array<any>).map(InstructionFromJSON)),
        'setupInstructions': ((json['setupInstructions'] as Array<any>).map(InstructionFromJSON)),
        'swapInstruction': InstructionFromJSON(json['swapInstruction']),
        'cleanupInstruction': !exists(json, 'cleanupInstruction') ? undefined : InstructionFromJSON(json['cleanupInstruction']),
        'addressLookupTableAddresses': json['addressLookupTableAddresses'],
    };
}

export function SwapInstructionsResponseToJSON(value?: SwapInstructionsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tokenLedgerInstruction': InstructionToJSON(value.tokenLedgerInstruction),
        'computeBudgetInstructions': ((value.computeBudgetInstructions as Array<any>).map(InstructionToJSON)),
        'setupInstructions': ((value.setupInstructions as Array<any>).map(InstructionToJSON)),
        'swapInstruction': InstructionToJSON(value.swapInstruction),
        'cleanupInstruction': InstructionToJSON(value.cleanupInstruction),
        'addressLookupTableAddresses': value.addressLookupTableAddresses,
    };
}
