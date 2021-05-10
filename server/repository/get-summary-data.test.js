const getSummaryData = require('./get-summary-data')


test("Verify calling getSummaryData", async () => {
    const res = await getSummaryData("book",2);
    // console.log(res);
    expect(res.length).toEqual(2);
});

test("Verify calling getSummaryData with more books than existing", async () => {
    const res = await getSummaryData("some interesting book",100);
    expect(res.length).toEqual(55);
});

test("Verify calling getSummaryData without any query", async () => {
    const res = await getSummaryData("",2);
    expect(res.length).toEqual(0);
});

test("Verify calling getSummaryData with number of books as 0", async () => {
    const res = await getSummaryData("book",0);
    expect(res.length).toEqual(0);
});