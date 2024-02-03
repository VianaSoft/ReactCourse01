export const loadPlans = async () => {
  const apiUrl = "https://localhost:7186/v1/plans?OrderBy=Total";
  const apiUrlLogin = "https://localhost:7003/v1/identity/user/login";

  const requestData = {
    email: "viana.dener@gmail.com",
    password: "Teste@123",
  };
  const requestOptionsLogin = {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  };

  const loginResponse = fetch(apiUrlLogin, requestOptionsLogin);
  const [login] = await Promise.all([loginResponse]);
  const loginJson = await login.json();

  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + loginJson.AccessToken,
      "Content-Type": "application/json",
    },
  };

  const plansResponse = fetch(apiUrl, requestOptions);
  const [plans] = await Promise.all([plansResponse]);
  const plansJson = await plans.json();

  return plansJson;
};
