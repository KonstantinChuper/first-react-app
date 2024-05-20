import { LinkButton } from "./LinkButton";
import { Lists } from "./Lists";
import { Pictures } from "./Pictures";
import { Text } from "./Text";
function MainContent() {
  return (
    <div className="MainContent">
      <Text />
      <Lists />
      <Pictures />
      <LinkButton />
    </div>
  );
}
export default MainContent;
