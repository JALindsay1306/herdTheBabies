const herdTheBabies = require ("../kata/herdTheBabies")

describe ("herdTheBabies", () =>{
    test("returns a string", ()=>{
        expect(typeof herdTheBabies()).toBe("string");
    });
    test("when passed a single character, returns that character", () =>{
        expect(herdTheBabies("A")).toBe("A");
    });
    test("when passed only upper case characters, returns them in order", ()=>{
        expect(herdTheBabies("BCDAFGE")).toBe("ABCDEFG");
    });
    test("when passed a single character in upper and lower case, arrange accordingly", ()=>{
        expect(herdTheBabies("aAaaa")).toBe("Aaaaa");
    });
    test("when passed a selection of characters in upper and lower case, arrange accordingly", ()=>{
        expect(herdTheBabies("aEAaCbefeaDBacFd")).toBe("AaaaaBbCcDdEeeFf");
    });
    test("passes example tests", ()=>{
        expect(herdTheBabies("aA")).toBe("Aa");
        expect(herdTheBabies("aBA")).toBe("AaB");
        expect(herdTheBabies("bbaBccAC")).toBe("AaBbbCcc");
        expect(herdTheBabies("AaBbbBaAbAbbAbB")).toBe("AAAAaaBBBbbbbbb");
    })

})