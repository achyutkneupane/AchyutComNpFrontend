const fetchSettings = () => {
  return fetch(process.env.REACT_APP_API_LINK+"settings")
    .then((x) => x.json());
};
const fetchSkills = () => {
  return fetch(process.env.REACT_APP_API_LINK+"skills")
    .then((x) => x.json());
};
const fetchExperiences = () => {
  return fetch(process.env.REACT_APP_API_LINK+"experiences")
    .then((x) => x.json());
};
const fetchEducations = () => {
    return fetch(process.env.REACT_APP_API_LINK+"educations")
      .then((x) => x.json());
  };

const wrapPromise = (promise) => {
  let status = "pending";
  let result = "";
  let suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      }

      return result;
    },
  };
};

export const settingsFetch = () => {
  return {
    settings: wrapPromise(fetchSettings()),
    skills: wrapPromise(fetchSkills()),
    experiences: wrapPromise(fetchExperiences()),
    educations: wrapPromise(fetchEducations()),
  };
};
