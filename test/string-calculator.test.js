const { add } = require('../src/string-calculator')

describe("String Calculator should", () => {
    it("return 0 for an empty string", () => {
        expect(add("")).toBe(0)
    })

    it("return 1 for its representation as string", () => {
        expect(add("1")).toBe(1)
    })
    
    it("return 2 for its representation as string", () => {
        expect(add("2")).toBe(2)
    })

    it("return 3 for its representation as string", () => {
        expect(add("3")).toBe(3)
    })

    it("return the result of sum 1 and 1 if we provide \"1,1\"", () => {
        expect(add("1,1")).toBe(2)
    })

    it("return the result of sum 1 and 2 if we provide \"1,2\"", () => {
        expect(add("1,2")).toBe(3)
    })

    it("return the result of sum 2 and 2 if we provide \"2,2\"", () => {
        expect(add("2,2")).toBe(4)
    })
})