/**
 * Name       : Graphics.js
 * Author     : Rafael David Quirino
 * Version    : 1.0
 * Date       : January, 20 / 2015
 * Licence    : GNU License
 * Description: GFX.js
 * ------------
 *    - A Graphic Framework for Javascript.
 */





/*
  => Notes:

    ---------------------------------------------------------------------------
    * Need to implement a poller to test if mouse is pressed,
      if mouse is moving, if both, this kinda thing ? ...
      
      - Deprecated, replaced by event driven techniques...
    ---------------------------------------------------------------------------

    * Text must become Shape object * Done, need improvements...

    * Implement TextBox class

    * Implement select mode (both clicking in the shape and dragging a select area)
      -> Shapes must have theirs selectable properties setted

      - Selecting for drag'n'drop done, but not selecting alone...

      - Click, dragg Area, hold <Ctrl> and click for multiple selection

      - Select edges and vertices

    * Implement drag'n'drop. * Done, nedd improvements...
      
      - Need to implement also for groups

    * Implement transformations (translation, scale, rotation) for shapes
      
      - Translation implemented

      - Scale implemented, but not satisfying

      - Also for edges and vertices

    ---------------------------------------------------------------------------
    * Implement bringUp choice using right click toggle
      
      - Deprecated, impossible (rigth click fires mouseup event)

      - Replaced by in place drag'n'drop

      - Done !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    ---------------------------------------------------------------------------

    * Implement regular polygons

      - Find real center

        + Deprecated. Center will be equally found for all shapes

    ---------------------------------------------------------------------------
    * Find bounding box for irregular polygons, then stablish pseudo-centers
      - Done !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    ---------------------------------------------------------------------------

    ---------------------------------------------------------------------------
    * Enable transparency for shapes
      - Done !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    ---------------------------------------------------------------------------

    * Implement gradient and textures

    * Implement callback calls for events on shapes, like shape.ondrag(function(){})

    * Implement animations for shapes, both in chain and parallel

      - Translation, scale, rotation

      - Transparency, color, gradient, texture

      - Visibility (show and hide fadding)

    * Implement animation timelines for shapes, groups, layers and scenes, and animation
      stacks and routines for groups, layers and scenes

    * Implement groups for shapes

    * Implement layers for groups

    * Implement scenes for layers

    * Implement projects for scenes

    * Implement visible area for scenes

    * Implmenet shape creation also with percentages instead of points

    * Implement collision detection for shapes and groups

    * Implement jQuery like attribute accessors for GFX object too
      - Put underscores in all attributes as first char, and change their calls throughout
        the files (specially mouse.js in events/)

    * Implement grids for the canvas

    * Provide origin translation possibility

    //-------------------------------------------------------------------------
    * Implement dashed stroke mode for shapes

      - Done, and also for borders !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //-------------------------------------------------------------------------

    * Implement round corners for shapes

    * Rethink Image structure. It has to save all of its pixels. A Pixel must become a model. 

    * Eliminate Point attributes from shapes. Use {x: x, y: y} instead.

    * Deal with assets preloading before rendering things...
*/