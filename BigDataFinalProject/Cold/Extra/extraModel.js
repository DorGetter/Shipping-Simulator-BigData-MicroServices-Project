/**
*  Predictor for species from model/6154d9c899dfe7073f008ef6
*  Predictive model by BigML - Machine Learning Made Easy
*/
function predictSpecies(sepalWidth, petalLength, petalWidth) {
    if (petalLength == null) {
        return "Iris-setosa";
    }
    else if (petalLength > 2.45) {
        if (petalWidth == null) {
            return "Iris-versicolor";
        }
        else if (petalWidth > 1.75) {
            if (petalLength > 4.85) {
                return "Iris-virginica";
            }
            else if (petalLength <= 4.85) {
                if (sepalWidth == null) {
                    return "Iris-virginica";
                }
                else if (sepalWidth > 3.1) {
                    return "Iris-versicolor";
                }
                else if (sepalWidth <= 3.1) {
                    return "Iris-virginica";
                }
            }
        }
        else if (petalWidth <= 1.75) {
            if (petalLength > 4.95) {
                if (petalWidth > 1.55) {
                    if (petalLength > 5.45) {
                        return "Iris-virginica";
                    }
                    else if (petalLength <= 5.45) {
                        return "Iris-versicolor";
                    }
                }
                else if (petalWidth <= 1.55) {
                    return "Iris-virginica";
                }
            }
            else if (petalLength <= 4.95) {
                if (petalWidth > 1.65) {
                    return "Iris-virginica";
                }
                else if (petalWidth <= 1.65) {
                    return "Iris-versicolor";
                }
            }
        }
    }
    else if (petalLength <= 2.45) {
        return "Iris-setosa";
    }
    return null;
}