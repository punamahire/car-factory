// No parameters defined because function needs nothing to do its job
const createChassis = () => {
	// Create a new object. No properties yet.
	const newChassisObject = {}
	return newChassisObject
}

const addBody = (chassisObject) => {
	// Use dot notation to add a new property
	chassisObject.body = "Fever"

	// Return the chassis that now has a body property on it
	return chassisObject
}

const addWheels = (chassisObject) => {
    chassisObject.wheels = 4;
    return chassisObject;
}

const addEngine = (chassisObject) => {
    chassisObject.engine = "4.8L";
    return chassisObject;
}

const addSteeringWheel = (chassisObject) => {
    chassisObject.steeringWheel = "Tilting"
    return chassisObject;
}

const addDriveTrain = (chassisObject) => {
    chassisObject.driveTrain = "Two wheel drive"
    return chassisObject;
}

const chassis = createChassis()
const chassisBody = addBody(chassis)
const chassisWheels = addWheels(chassisBody)
const chassisEngine = addEngine(chassisWheels)


const assembleCar = (newChassisObject) => {
    addBody(newChassisObject)
    addWheels(newChassisObject)
    addEngine(newChassisObject)
    addSteeringWheel(newChassisObject)
    addDriveTrain(newChassisObject)
    return newChassisObject
}
console.log(createChassis());
console.log(assembleCar())