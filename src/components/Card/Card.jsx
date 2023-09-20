import { Button } from "../Button/Button";
import "../Card/Card.css";

export const Card = ({
  children,
  headingText,
  imageSrc,
  border,
  shadow = "sm",
  showActionButtons = false,
  successActionText = "Ok",
  rejectActionText = "Cancel",
  layout = "vertical",
}) => {
  const layoutClass = `card__${layout}`;
  const shadowClass = `shadow-${shadow}`;
  const borderClass = `border-${border}`;
  const maxWidthClass = layout === "horizontal" ? "max-width-350" : "";

  return (
    <div
      className={`card__container ${shadowClass} ${borderClass} ${maxWidthClass}`}
    >
      <div className={`${layoutClass}`}>
        {(headingText || imageSrc) && (
          <header className="card__header">
            {layout === "vertical" && <h3>{headingText}</h3>}
            {layout === "horizontal" && imageSrc && (
              <img src={imageSrc} className="card__image" />
            )}
            {layout === "horizontal" && !imageSrc && <h3>{headingText}</h3>}
          </header>
        )}

        <main>
          {layout === "vertical" && imageSrc && (
            <img src={imageSrc} className="card__image" />
          )}
          {layout === "horizontal" && imageSrc && <h3>{headingText}</h3>}

          <p>{children}</p>
        </main>
      </div>

      {showActionButtons && (
        <footer className="card__footer">
          <Button type="solid" variant="success">
            {successActionText}
          </Button>
          <Button type="solid" variant="error">
            {rejectActionText}
          </Button>
        </footer>
      )}
    </div>
  );
};
