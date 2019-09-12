const assert = require("chai").assert;

describe("Test case for Merge Sort",function(){
    
    const obj = require("../functional and algorithm/mergesort/mergesortBl")
    
    it("Check Merge Sort - False",function(){
        var arr= [2,34,4,444.5];
        obj.mergeSort(arr);
        assert.notDeepEqual(arr,[2,34,4,444.5]);
    })

    it("Check Merge Sort",function(){
        var arr= [2,34,4,444.5];
        obj.mergeSort(arr);
        assert.deepEqual(arr,[2,4,34,444.5]);
    })

});
describe("Test case for distance",function(){
    
    const obj = require("../functional and alorithm/distance/distanceBl")
    
    it("Check distance - False",function(){
        assert.notDeepEqual(obj.calculation(3,4),6);
    })

    it("Check distance",function(){
        assert.deepEqual(obj.calculation(3,4),5);
    })

});
describe("Test case for leap year",function(){
    
    const obj = require("../functional and alorithm/leapyear/leapyearBl")
    
    it("Check leap year n it should be greater than 999 - False",function(){
        assert.notDeepEqual(obj.leapyear(2000),"not a leap year");
    })

    it("Check leap year n it should be greater than 999",function(){
        assert.deepEqual(obj.leapyear(2000),"leap year");
    })

});