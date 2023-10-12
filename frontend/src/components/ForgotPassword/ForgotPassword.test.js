import { render, fireEvent, waitFor } from "@testing-library/react";
import ForgotPassword from "./ForgotPassword";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";

let getByTestId, resolve, reject;
window.alert = jest.fn();
// const alert = jest.fn();

function renderMemoryRouter() {
  return render(
    <MemoryRouter>
      <ForgotPassword />
    </MemoryRouter>
  );
}

function mockImplement(status) {
  // window.alert = jest.fn();
  if (status === resolve) {
    axios.put = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        data: {
          success: true,
        },
      });
    });
  } else if (status === reject) {
    axios.put = jest.fn().mockImplementation(() => {
      return Promise.reject({
        data: {
          success: false,
        },
      });
    });
  }
}

describe("ForgotPassword test suite ", () => {
  beforeEach(() => {
    getByTestId = renderMemoryRouter().getByTestId;
  });

  it("should display alert message on form submission", async () => {
    mockImplement(resolve);

    fireEvent.submit(getByTestId("Reset"));
    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith("Success updating password");
    });
  });

  it("should display error message if fields arent filled", async () => {
    mockImplement(reject);

    const error = "Error updating password";
    window.alert(error);

    fireEvent.submit(getByTestId("Reset"));
    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith("Error updating password");
    });
  });
});
