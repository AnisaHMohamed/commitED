// beforeAll(fn, timeout)
// beforeEach(fn, timeout)
// afterEach(fn, timeout)
// afterAll(fn, timeout)
//toBe, toHaveLength, toHaveProperty and toBeGreaterThan
// expect(getByText("Default")).toHaveClass("button");
// expect(getByPlaceholderText("Enter Student Name")).toHaveValue("");
// expect(getByTestId("student-name-input")).toHaveValue("Lydia Miller-Jones");
it("renders without crashing", () => {
  render(<About />);
});
// it("renders its `children` prop as text", () => {
//   const { getByText } = render(<Button>Default</Button>);
//   expect(getByText("Default")).toBeInTheDocument();
// });
