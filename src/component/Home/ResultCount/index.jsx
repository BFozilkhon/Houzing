import React from "react";
import { Wrap, Hr } from "./style";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export const ResultCount = () => {
  return (
    <>
      <Wrap>
        <Wrap.Div>
          <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <Wrap.NumHeader>
                {isVisible ? (
                  <CountUp end={66180} duration={1} start={0} />
                ) : null}
                +
              </Wrap.NumHeader>
            )}
          </VisibilitySensor>
          <Wrap.Item>Homes for sale</Wrap.Item>
        </Wrap.Div>
        <Wrap.Div>
          <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <Wrap.NumHeader>
                {isVisible ? (
                  <CountUp end={4809} duration={1} start={0} />
                ) : null}
                +
              </Wrap.NumHeader>
            )}
          </VisibilitySensor>
          <Wrap.Item>Open houses</Wrap.Item>
        </Wrap.Div>
        <Wrap.Div>
          <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <Wrap.NumHeader>
                {isVisible ? (
                  <CountUp end={30469} duration={1} start={0} />
                ) : null}
                +
              </Wrap.NumHeader>
            )}
          </VisibilitySensor>
          <Wrap.Item>Recently sold</Wrap.Item>
        </Wrap.Div>
        <Wrap.Div>
          <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <Wrap.NumHeader>
                {isVisible ? (
                  <CountUp end={2919} duration={1} start={0} />
                ) : null}
                +
              </Wrap.NumHeader>
            )}
          </VisibilitySensor>
          <Wrap.Item>Price reduced</Wrap.Item>
        </Wrap.Div>
      </Wrap>
      <Hr />
    </>
  );
};

export default ResultCount;
