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
  var profile = {
    name: "",
    tagline: "",
    experiance: [],
    education: []
  };

  profile.name = document.querySelectorAll("li.break-words")[0].innerText;
  profile.tagline = document.querySelectorAll("h2.t-black")[0].innerText;

  let x = document
    .getElementById("experience-section")
    .getElementsByTagName("li");
  if (x != undefined) {
    for (let i = 0; i < x.length; i++) {
      var experianceProfile = {
        designation: "",
        company: "",
        experiance: "",
        area: "",
        details: ""
      };
      experianceProfile.designation = x[i]
        .querySelector("div.display-flex")
        .querySelector("h3").innerText;
      experianceProfile.company = x[i]
        .querySelector("div.display-flex")
        .querySelector("p.t-normal").innerText;
      experianceProfile.experiance =
        x[i]
          .querySelector("div.display-flex")
          .querySelector("span.pv-entity__bullet-item-v2") != null
          ? x[i]
              .querySelector("div.display-flex")
              .querySelector("span.pv-entity__bullet-item-v2").innerText
          : "";
      experianceProfile.area = x[i]
        .querySelector("h4.pv-entity__location")
        .getElementsByTagName("span")[1].innerText;
      experianceProfile.details = x[i].querySelector(
        "p.pv-entity__description"
      ).innerText;
      profile.experiance.push(experianceProfile);
    }
  }

  let y = document
    .getElementById("education-section")
    .getElementsByTagName("li");
  if (y != undefined) {
    for (let i = 0; i < y.length; i++) {
      var educationProfile = {
        name: "",
        degree: "",
        passout_year: ""
      };
      educationProfile.name = y[i].querySelector(
        "h3.pv-entity__school-name"
      ).innerText;

      educationProfile.degree = y[i].querySelector(
        "span.pv-entity__comma-item"
      ).innerText;

      educationProfile.passout_year = y[i].querySelectorAll("time").length
        ? y[i].querySelectorAll("time")[1].innerText
        : "";

      profile.education.push(educationProfile);
    }
  }

  dataDownload(JSON.stringify(profile, null, 4), "data.json", "text/plain");
});
