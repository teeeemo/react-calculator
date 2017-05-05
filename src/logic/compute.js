/**
 * input current state and next oprator,compute the result and return the next state
 */
import isNumber from './isNumber'
import operate from './operate'

const compute = function (curStateObj, nextOpStr) {
    if (nextOpStr === 'AC') {
        return {
            total: null,
            next: null,
            operation: null,
        };
    }

    if (isNumber(nextOpStr)) {
        if (nextOpStr === '0' && curStateObj.next === '0') {
            return {};
        }
        // If there is an operation, update next
        if (curStateObj.operation) {
            if (curStateObj.next) {
                return { next: curStateObj.next + nextOpStr };
            }
            return { next: nextOpStr };
        }
        // If there is no operation, update next and clear the value
        if (curStateObj.next) {
            return {
                next: curStateObj.next + nextOpStr,
                total: null,
            };
        }
        return {
            next: nextOpStr,
            total: null,
        };
    }

    if (nextOpStr === '.') {
        if (curStateObj.next) {
            if (curStateObj.next.includes('.')) {
                return {};
            }
            return { next: curStateObj.next + '.' };
        }
        if (curStateObj.operation) {
            return { next: '0.' };
        }
        if (curStateObj.total) {
            if (curStateObj.total.includes('.')) {
                return {};
            }
            return { total: curStateObj.total + '.' };
        }
        return { next: '0.' };
    }

    if (nextOpStr === '=') {
        if (curStateObj.next && curStateObj.operation) {
            return {
                total: operate(curStateObj.total, curStateObj.next, curStateObj.operation),
                next: null,
                operation: null,
            };
        } else {
            // '=' with no operation, nothing to do
            return {};
        }
    }

    if (nextOpStr === '+/-') {
        if (curStateObj.next) {
            return { next: (-1 * parseFloat(curStateObj.next)).toString() };
        }
        if (curStateObj.total) {
            return { total: (-1 * parseFloat(curStateObj.total)).toString() };
        }
        return {};
    }

    // Button must be an operation

    // When the user presses an operation button without having entered
    // a number first, do nothing.
    // if (!curStateObj.next && !curStateObj.total) {
    //   return {};
    // }

    // User pressed an operation button and there is an existing operation
    if (curStateObj.operation) {
        return {
            total: operate(curStateObj.total, curStateObj.next, curStateObj.operation),
            next: null,
            operation: nextOpStr,
        };
    }

    // no operation yet, but the user typed one

    // The user hasn't typed a number yet, just save the operation
    if (!curStateObj.next) {
        return { operation: nextOpStr };
    }

    // save the operation and shift 'next' into 'total'
    return {
        total: curStateObj.next,
        next: null,
        operation: nextOpStr,
    };
}
export default compute;