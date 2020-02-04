const { formatPrice, getRelativeTime } = require('../../utils/helper');

describe('format price', () => {
    it ('helper format price expect to format 5 digits', () => {
        const expectedValue = '$ 10,000.00';
        const actualValue = formatPrice(10000);
        expect(actualValue).toBe(expectedValue);
    });

    it ('helper format price expect to format 4 digits', () => {
        const expectedValue = '$ 1,000.00';
        const actualValue = formatPrice(1000);
        expect(actualValue).toBe(expectedValue);
    });

    it ('helper format price expect to format 5 digits with decimal value', () => {
        const expectedValue = '$ 10,000.33';
        const actualValue = formatPrice(10000.332);
        expect(actualValue).toBe(expectedValue);
    });

    it ('helper format price expect no format for 2 digits', () => {
        const expectedValue = '$ 15.00';
        const actualValue = formatPrice(15);
        expect(actualValue).toBe(expectedValue);
    });

    it ('helper format price expect no format for 1 digit', () => {
        const expectedValue = '$ 8.00';
        const actualValue = formatPrice(8);
        expect(actualValue).toBe(expectedValue);
    });

    it ('helper format price expect no format for 1 digit with other currency', () => {
        const expectedValue = 'Php 8.00';
        const actualValue = formatPrice(8, 'Php');
        expect(actualValue).toBe(expectedValue);
    });
});


describe('get relative time', () => {
    const second = 1000;
    const minute = 60 * second;
    const hour = 60 * minute;
    const day = 24 * hour;
    it ('helper get relative time 2 minutes ago', () => {
        const currentDate = new Date();
        const twoMinutesFromCurrentDate = new Date(currentDate - 2 * minute);
        const actual = getRelativeTime(currentDate, twoMinutesFromCurrentDate);
        const expected = '2 minutes ago';
        expect(actual).toBe(expected);
    });

    it ('helper get relative time 5 minutes ago', () => {
        const currentDate = new Date();
        const twoMinutesFromCurrentDate = new Date(currentDate - 5 * minute);
        const actual = getRelativeTime(currentDate, twoMinutesFromCurrentDate);
        const expected = '5 minutes ago';
        expect(actual).toBe(expected);
    });

    it ('helper get relative time 5 seconds ago', () => {
        const currentDate = new Date();
        const fiveSecondsFromCurrentDate = new Date(currentDate - 5 * second);
        const actual = getRelativeTime(currentDate, fiveSecondsFromCurrentDate);
        const expected = '5 seconds ago';
        expect(actual).toBe(expected);
    });

    it ('helper get relative time 10 hours ago', () => {
        const currentDate = new Date();
        const tenHoursFromCurrentDate = new Date(currentDate - 10 * hour);
        const actual = getRelativeTime(currentDate, tenHoursFromCurrentDate);
        const expected = '10 hours ago';
        expect(actual).toBe(expected);
    });

    it ('helper get relative time 6 days ago', () => {
        const currentDate = new Date();
        const tenHoursFromCurrentDate = new Date(currentDate - 6 * day);
        const actual = getRelativeTime(currentDate, tenHoursFromCurrentDate);
        const expected = '6 days ago';
        expect(actual).toBe(expected);
    });

    it ('helper get relative time more than a week', () => {
        const currentDate = new Date();
        const tenHoursFromCurrentDate = new Date(currentDate - 10 * day);
        const actual = getRelativeTime(currentDate, tenHoursFromCurrentDate);
        const expected = tenHoursFromCurrentDate.toString();
        expect(actual).toBe(expected);
    });
});
