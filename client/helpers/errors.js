/**
 * Created by Paul on 16/05/2016.
 */
// Local (client-only) collection
Errors = new Mongo.Collection(null);

throwError = function(message) {
    Errors.insert({message: message});
};