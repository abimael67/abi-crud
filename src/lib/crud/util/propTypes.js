import PropTypes from 'prop-types'
export const crudPT = () => ({
    /**This prop takes the basic data to load the CRUD screens. */
    data:PropTypes.shape({
        /**Receives an array of entities objects to be loaded in the CRUD screens. */
        entities: PropTypes.array.isRequired,
        /**Receives a name for the entity to be identified by all over the screens. */
        entityName: PropTypes.string.isRequired,
        /**Unique identity field of the entity that will be used to refer to a single record in the data.  */
        entityId:PropTypes.string.isRequired,
        /**If you want to display a more friendly name for your entity, then you can put that name in this field. If empty, entityName will be used instead. */
        entityDisplayName:PropTypes.string,
        
    }),
    /**This prop takes a configuration object for all CRUD screens. If skipped, default settings will be taken. */
    config:PropTypes.shape({
        /**Only fields specified here will be shown all over the screens. */
        fieldsToDisplay: PropTypes.arrayOf(PropTypes.string),
        /**Fields specified here will be hidden. */
        fieldsToHide:PropTypes.arrayOf(PropTypes.string),
        /**Field names will be replaced by names in this array. This array must be either empty or must include ALL the corresponding fields in the original order to work properly. If empty, original field names will be used instead. */
        fieldsDisplayNames:PropTypes.arrayOf(PropTypes.string),   
        /**Sets the decorations of the labels all over the screens. */     
        labelsConfig:PropTypes.shape({
            /**Receives one case type to be either "capital", "upper" or "lower. Default "capital". */
            caseType:PropTypes.oneOf(['capital', 'upper', 'lower'])
        }),
        /**In construction. Do not use. */
        fieldsTypes:PropTypes.arrayOf(PropTypes.shape({
            fieldName:PropTypes.string,
            type:PropTypes.shape({
                type:PropTypes.oneOf(['text', 'date', 'select', 'bool']),
                options:PropTypes.any
            })
        })),
        /**Receives the basic CRUD actions callbacks. If null, basic handler will be used instead. */
        actionsCallbacks: PropTypes.shape({
            /**Callback function to handle deletion of items. */
            delete: PropTypes.func,
            /**Callback function to handle updation of items. */
            update: PropTypes.func,
            /**Callback function to handle insertion of items. */
            insert: PropTypes.func
        }),
        /**Defines the style and actions of the listView */
        tableConfig: PropTypes.shape({
            /**Class name to be used in the className property of the table. */
            className: PropTypes.string,
            /**Class name to be used in the className property of the delete action button in the table. */
            deleteActionClassName: PropTypes.string,
            /**Class name to be used in the className property of the edit action button in the table. */
            editActionClassName: PropTypes.string,
            /**Class name to be used in the className property of the view action button in the table. */
            viewActionClassName: PropTypes.string, 
             /**Callback function to handle deletion of items. */
            deleteActionCallBack: PropTypes.func,
             /**Callback function to handle updation of items. */
            editActionCallBack: PropTypes.func,
             /**Callback function to handle viewing of items. */
            viewActionCallBack: PropTypes.func,          
        }),
        /**Receives an array of enabled actions. Available actions are "edit", "view", "delete", "create" */
        actions:PropTypes.arrayOf(PropTypes.string),
        /**All labels displayed all over the CRUD screens can be customized here. */             
        labels:PropTypes.shape({
            /**Labels of the listView screen. If empty, default generic english labels will be used instead.*/
            listView:PropTypes.shape({               
                searchBoxPlaceholder: PropTypes.string,
                showRowsPerPages: PropTypes.string,
                showingRows: PropTypes.string,
                noRows: PropTypes.string,
                actionsHeader:PropTypes.string,
                deleteAction:PropTypes.string,
                editAction:PropTypes.string,
                viewAction:PropTypes.string,
                deleteConfirmMessage:PropTypes.string
            })
        }),
    })
})