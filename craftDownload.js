javascript: (function() {
    function dataDownload(content, fileName, contentType) {
      var a = document.createElement("a");
      var file = new Blob([content], {
        type: contentType
      });
      a.href = URL.createObjectURL(file);
      a.download = fileName;
      a.click();
    }
    var arrayData = [];
    let y = document.querySelector("table.companies-table").querySelector("tbody").querySelectorAll("tr");

    let x = Array.from(y);
    if (x != undefined) {
      x.forEach((dal)=>{
        let profile = {
            company: "",
            hq: "",
            employees: "",
            valuation: "",
            revenue: ""
          };
          profile.company = dal.querySelector("td.companies-table-row__company-short-info").querySelector("a").innerHTML;
          profile.hq = dal.querySelector("td.companies-table-row__hq").innerHTML;
          profile.employees= dal.querySelector("td.companies-table-row__employees").innerHTML;
          profile.valuation= dal.querySelector("td.companies-table-row__valuation").innerText;
          profile.revenue= dal.querySelector("td.companies-table-row__revenue").innerText;
          arrayData.push(profile);
        })
    }
    dataDownload(JSON.stringify(arrayData, null, 4), "data.json", "text/plain");
  })();
  