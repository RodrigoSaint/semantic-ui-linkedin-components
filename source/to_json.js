const fs = require("fs");
const path = require("path");
const csvjson = require("csvjson");

const profileFolder = process.argv[2];

function csvToObject(file) {
  const config = { encoding: "utf8" };
  const fullPath = path.resolve(profileFolder, file);
  let lines = fs.readFileSync(fullPath, config).split("\n");
  let sanitizedHeader = lines[0].replace(/\ /g, "_").toLocaleLowerCase();
  lines[0] = sanitizedHeader;
  const fullContent = lines.join("\n");
  const csvOptions = { delimiter: ",", quote: '"' };
  return csvjson.toObject(fullContent, csvOptions);
}

var fullProfile = {
  profile: csvToObject(path.resolve(profileFolder, "Profile.csv"))[0],
  certifications: csvToObject(
    path.resolve(profileFolder, "Certifications.csv")
  ),
  courses: csvToObject(path.resolve(profileFolder, "Courses.csv")),
  education: csvToObject(path.resolve(profileFolder, "Education.csv")),
  languages: csvToObject(path.resolve(profileFolder, "Languages.csv")),
  positions: csvToObject(path.resolve(profileFolder, "Positions.csv")),
  publications: csvToObject(path.resolve(profileFolder, "Publications.csv")),
  skills: csvToObject(path.resolve(profileFolder, "Skills.csv"))
};

fs.writeFileSync(
  path.resolve(profileFolder, "profile.json"),
  JSON.stringify(fullProfile)
);
