const InputBox = ({ stylesForH1, h1Message }) => {
  const [input, setInput] = useState("");

  return (
    <>
      <h1 style={stylesForH1}>{h1Message}</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
    </>
  );
};

const FancyInputBox = () => {
  return (
    <div>
      <InputBox
        stylesForH1={{ color: "red" }}
        h1Message={"Enter your name: "}
      />
    </div>
  );
};
