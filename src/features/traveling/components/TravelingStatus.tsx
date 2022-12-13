import { Popover, PopoverBody, PopoverContent, PopoverHeader, PopoverTrigger, Text } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import Timer from "../../../util/components/Timer";
import { convertMillis } from "../../../util/utils";
import { finishTraveling } from "../state/travelingSlice";

const styles = {
  borderStyle: "solid",
  borderRadius: "5px",
  backgroundColor: "#5c5470",
};

const TravelingStatus = () => {
  const { travelingStatus } = useAppSelector((state) => state.reducer.traveling);
  const dispatch = useAppDispatch();

  return (
    <>
      {travelingStatus.traveling &&
        <Popover openDelay={100} trigger="hover">
          <PopoverTrigger>
            <img
              className="pixelImg"
              style={styles}
              src={`${process.env.REACT_APP_ASSETS_DIR}/images/running.png`}
              alt="Traveling status"
            />
          </PopoverTrigger>
          <PopoverContent
            boxShadow="dark-lg"
            borderRadius={15}
            color="gray.300"
            bg="#3c4b64"
            border="none"
          >
            <PopoverHeader bg="#3a3b47" borderTopRadius={15}>
              <Text>Traveling to: {travelingStatus.destinationLocation.name}</Text>
            </PopoverHeader>
            <PopoverBody>
              <Text>Time started: {new Date(travelingStatus.travelingStartedMillis).toDateString()}</Text>
              <Text>Total time needed: {convertMillis(travelingStatus.timeNeededMillis)}</Text>
              <Text>Time left:
                <Timer
                  seconds={travelingStatus.timeLeft}
                  onFinish={() => dispatch(finishTraveling())} />
              </Text>
              <Text>Destination: {travelingStatus.destinationLocation.name}</Text>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      }
    </>
  )
}




export default TravelingStatus;
